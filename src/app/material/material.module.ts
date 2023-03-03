import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  FormsModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
