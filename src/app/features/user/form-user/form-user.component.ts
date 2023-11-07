import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../core/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  id: number = 0;
  user: User = new User();

  constructor(
    private userServ: UserService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.ac.snapshot.params['id'];
    if (this.id !== undefined) {
      this.userServ.fetchUserById(this.id).subscribe({
        next: (data) => (this.user = data)
      });
    }
  }

  add(f: NgForm) {
    if (this.getButtonMessage() === 'Add') {
      console.log(f);
      console.log(this.user);
      this.user.accountCategory = 'CUSTOMER';
      this.userServ.addUser(this.user).subscribe(() =>
        this.router.navigate(['user/listUsers'])
      );
    } else {
      this.userServ.updateUser(this.id, this.user).subscribe({
        next: () => this.router.navigate(['user/listUsers'])
      });
    }
  }

  getButtonMessage() {
    return this.id !== undefined ? 'update' : 'Add';
  }
}