import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Supprimez l'import inutile de NgModel
import { User } from '../../../core/user';
import { Router } from '@angular/router'; // Utilisez Router au lieu de Route
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  user: User = new User();

  constructor(private userServ: UserService, private router: Router) {}

  add(f: NgForm) {
    console.log(f);
    console.log(this.user);
    this.user.accountCategory = 'CUSTOMER'; // Assurez-vous que 'accountCategory' est correctement défini dans votre modèle User
    this.userServ.addUser(this.user).subscribe(
      () => this.router.navigate(['user/listUsers'])
    );
  }
}
