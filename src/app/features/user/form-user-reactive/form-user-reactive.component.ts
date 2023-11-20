// form-user-reactive.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user-reactive',
  templateUrl: './form-user-reactive.component.html',
  styleUrls: ['./form-user-reactive.component.css']
})
export class FormUserReactiveComponent {
  user: User = new User(); // Initialisation d'un nouvel utilisateur
  forminput!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userServ: UserService,
    private router: Router
  ) {
    this.forminput = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      email: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail.com')]],
      password: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}?')]],
      birthDate: ["", [Validators.required]],
      profession: ["", [Validators.required]],
      accountCategory: this.fb.control({ value: "CUSTOMER", disabled: true })
    });
  }

  addUser() {
    if (this.forminput.valid) {
      // Assign the form values to the user object
      this.userServ.addUser(this.forminput.getRawValue()).subscribe(() =>
        this.router.navigate(['user/listUsers'])
      );
    } else {
      // Handle invalid form data
    }
  }

  get firstName() {
    return this.forminput.get('firstName')!;
  }
  

  get lastName() {
    return this.forminput.get('lastName');
  }

  get email() {
    return this.forminput.get('email');
  }

  get password() {
    return this.forminput.get('password');
  }

  get profession() {
    return this.forminput.get('profession');
  }

  get birthDate() {
    return this.forminput.get('birthDate');
  }
}
