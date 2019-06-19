import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UsersListComponent,
    UsersUpdateComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EditorModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
