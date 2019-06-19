import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../common/shared.module';
import { UserService } from '../../../services/user/user-actions/user.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public allUsers:any;
  public showUsers:boolean=false;
  constructor(public userService:UserService,public router:Router,public sharedModule:SharedModule,
    public loaderService:LoaderService) { }

  ngOnInit() {
    if(!this.sharedModule.isUserLoggedIn()){
      this.router.navigate(['user/login']);
      return;
    }
    this.loaderService.start();
    this.userService.getAllUsers().subscribe(res=>{
      this.loaderService.stop();
      console.log(res)
      if(res){
        this.showUsers = true;
        this.allUsers = res;
      }
    },(error)=>{
      this.loaderService.stop();
      this.showUsers = false;
      alert(error);
    })
  }
  updateUser(id){
    this.router.navigate(['user/update',id]);
  }
  deleteUser(id){
    this.loaderService.start();
    this.userService.deleteUser(id).subscribe(res=>{
      this.loaderService.stop();      
      if(res){
        alert("User Deleted successfully");
        this.ngOnInit();
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }

}
