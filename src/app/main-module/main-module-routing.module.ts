import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './main-module-components/home/home.component';
import { SignInComponent } from './main-module-components/sign-in/sign-in.component';
import { SignUpComponent } from './main-module-components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent , children:[
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'sign-in', component:SignInComponent },
    { path:'sign-up', component:SignUpComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
