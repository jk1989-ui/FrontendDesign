import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './main-module-components/home/home.component';
import { SignInComponent } from './main-module-components/sign-in/sign-in.component';
import { SignUpComponent } from './main-module-components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModuleModule { }
