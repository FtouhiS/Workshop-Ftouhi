import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user-reactive',
  templateUrl: './form-user-reactive.component.html',
  styleUrls: ['./form-user-reactive.component.css']
})
export class FormUserReactiveComponent {
  

  userForm=new FormGroup(
    {
      firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]),
      birthDate:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]*')]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl(''),
      address:new FormGroup(
        {

        }
      )

    
    
    }
  )
}
