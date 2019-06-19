import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersUpdateComponent } from './users-update/users-update.component';

const routes: Routes = [
  {
  path:'',
  component:LoginComponent
  },
  {
  path:'login',
  component:LoginComponent
  },{
    path:'signup',
    component:SignupComponent
  },{
    path:'all-users',
    component:UsersListComponent
  },{
    path:'update/:id',
    component:UsersUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
