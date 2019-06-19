import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/user/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/common/shared.module';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted = false;
  constructor(public authService: AuthService,private formBuilder: FormBuilder,public storageService:StorageService,
    public router:Router,public sharedModule:SharedModule,public loaderService:LoaderService) { }

  ngOnInit() {
    this.storageService.clearStorage();
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    let email = this.storageService.getDataByIndex("email")?this.storageService.getDataByIndex("email"):null;
    if(email){
      this.signupForm.controls.email.setValue(email);
    }
  }
  get f() { return this.signupForm.controls; }
  signup() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }
    this.loaderService.start();
    const signupPayload = {
        name: this.signupForm.controls.name.value,
        id: this.signupForm.controls.email.value,
        email: this.signupForm.controls.email.value,
        password: this.signupForm.controls.password.value,
    };
    console.log(signupPayload);
    this.authService.signup(signupPayload).subscribe(res=>{
      this.loaderService.stop();
      console.log(res);
      if(res){
        this.storageService.addDataByIndex("email",res.email);
        this.storageService.addDataByIndex("id",res.id);
        this.router.navigate(['/user/login']);
      }else{
        console.log(res);
        alert("Error occured in registring the user");
      }
    },(error)=>{
      this.loaderService.stop();
      console.log(error.status);
      alert(error);
    });
  }

}
