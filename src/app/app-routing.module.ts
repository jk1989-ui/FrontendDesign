import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin-module', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }, 
  { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
