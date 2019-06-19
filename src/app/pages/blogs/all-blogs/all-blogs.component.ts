import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/user/blog/blog.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../../common/shared.module';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  public allBlogs:any;
  public showBlogs:boolean=false;
  constructor(public blogService:BlogService,public router:Router,public sharedModule:SharedModule,public loaderService:LoaderService) { }

  ngOnInit() {
    if(!this.sharedModule.isUserLoggedIn()){
      this.router.navigate(['user/login']);
      return;
    }
    this.loaderService.start();
    this.blogService.getAllBlogs().subscribe(res=>{
      this.loaderService.stop();
      console.log(res)
      if(res){
        this.showBlogs = true;
        this.allBlogs = res;
      }
    },(error)=>{
      this.loaderService.stop();
      this.showBlogs = false;
      alert(error);
    })
  }
  seeDetails(blogId){
    this.router.navigate(['blog/details',blogId]);
  }
  addNewBlog(){
    this.router.navigate(['blog/create']);
  }
  editBlog(blogId){
    this.router.navigate(['blog/update',blogId]);
  }
  likeBlog(totalLikes,blogId){
    let likes = parseInt(totalLikes) + 1;
    this.loaderService.start();
    this.blogService.likeBlog(likes,blogId).subscribe(res=>{
      this.loaderService.stop();
      if(res){
        this.ngOnInit();
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }
  unlikeBlog(totalLikes,blogId){
    let likes = parseInt(totalLikes) - 1;
    this.loaderService.start();
    this.blogService.likeBlog(likes,blogId).subscribe(res=>{
      this.loaderService.stop();      
      if(res){
        this.ngOnInit();
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }
  deleteBlog(id){
    this.loaderService.start();
    this.blogService.deleteBlog(id).subscribe(res=>{
      this.loaderService.stop();      
      if(res){
        alert("Blog Deleted successfully");
        this.ngOnInit();
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }

}
