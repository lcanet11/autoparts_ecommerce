import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //private fb:FormBuilder = new FormBuilder()
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ){
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(3)]],
      apellido:["",[Validators.required,Validators.minLength(3)]],
      correo:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(8)]],
    })
  }

  registrarse(){
    console.log(this.myForm.value)
  }
}
