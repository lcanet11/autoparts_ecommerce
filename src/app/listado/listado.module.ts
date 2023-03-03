import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  exports:[
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListadoModule { }
