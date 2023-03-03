import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Incluir
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetalleComponent } from './Pages/detalle/detalle.component' //Incluir
import { ListadoModule } from './listado/listado.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ConcatenarPipe,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    ListadoModule,
    AppRoutingModule,
    HttpClientModule, //Incluir
    FormsModule, //Incluir
    ReactiveFormsModule, 
    BrowserAnimationsModule, //Incluir
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
