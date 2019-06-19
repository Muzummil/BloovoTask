import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AuthService } from './services/user/auth/auth.service';
import { SharedModule } from './common/shared.module';
import { UserService } from './services/user/user-actions/user.service';
import { BlogService } from './services/user/blog/blog.service';
import { LoaderService } from './services/loader.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
  ],
  providers: [
    AuthService,
    SharedModule,
    UserService,
    BlogService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
