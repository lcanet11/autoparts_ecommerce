import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ){
    this.myForm = this.fb.group({
      correo:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(8)]],
    })
  }

  login(){
    console.log(this.myForm.value)
  }
}
