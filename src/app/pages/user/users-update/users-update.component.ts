import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-actions/user.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {
  updateUserForm: FormGroup;
  submitted:boolean=false;
  id:any;
  constructor(private formBuilder: FormBuilder,public activeRoute:ActivatedRoute,public userService:UserService,
    public router:Router,public loaderService:LoaderService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.updateUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.loaderService.start();
    this.userService.getUserDetails(this.id).subscribe(res=>{
      this.loaderService.stop();
      if(res){
        this.updateUserForm.controls.name.setValue(res.name);
        this.updateUserForm.controls.email.setValue(res.email);
        this.updateUserForm.controls.password.setValue(res.password);
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }
  get f() { return this.updateUserForm.controls; }
  updateUser(){
    this.submitted = true;

    if (this.updateUserForm.invalid) {
        return;
    }
    this.loaderService.start();
    const payload={
      name:this.updateUserForm.controls.name.value,
      email:this.updateUserForm.controls.email.value,
      password:this.updateUserForm.controls.password.value,
    }
    this.userService.updateUser(payload,this.id).subscribe(res=>{
      this.loaderService.stop();      
      if(res){
        alert("User updated successfully");
        this.router.navigate(['user/all-users']);
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }


}
