import { NgModule, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes =[

  {path:'', component: LoginComponent}
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { 
  constructor() {
    console.log(VERSION.full); // 8.2.12
  }
}
