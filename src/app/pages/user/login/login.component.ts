import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/user/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/common/shared.module';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  constructor(public authService: AuthService,private formBuilder: FormBuilder,public storageService:StorageService,
    public router:Router,public sharedModule:SharedModule,public loaderService:LoaderService) { 
  }

  ngOnInit() {
    if(this.sharedModule.isUserLoggedIn()){
      this.router.navigate(['blog/all']);
      return;
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    let email = this.storageService.getDataByIndex("email")?this.storageService.getDataByIndex("email"):null;
    if(email){
      this.loginForm.controls.email.setValue(email);
    }
  }
  get f() { return this.loginForm.controls; }

  login() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loaderService.start();
    const loginPayload = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
        id:localStorage.getItem("id")
    };
    this.authService.login(loginPayload).subscribe(res=>{
    this.loaderService.stop();
        // this.loaderService.stop();
        console.log(res);
        if(res.password== this.loginForm.controls.password.value){
          this.storageService.addDataByIndex("email",res.email);
          this.storageService.addDataByIndex("name",res.name);
          console.log(res.avatar);
          this.storageService.addDataByIndex("image",res.avatar);
          this.router.navigate(['/blog/all']);
        }else{
          console.log(res);
          alert("Incorect username or password");
          // this.popup.showAlert("Invalid credentials",res.error.message,"error","btn-info");
        }
    },(error)=>{
      this.loaderService.stop();
      console.log(error.status);
      if(error.status === 404) {
        alert("User not found");
      }
    });
  }

}
