import { BlogService } from './../../../services/user/blog/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogId:number;
  public comment;
  public blogDetails:any;
  public showBlogDetails:boolean=false;
  public showNewComment:boolean=false;
  constructor(public activeRoute:ActivatedRoute,public router:Router,public blogService:BlogService) { }

  ngOnInit() {
    this.blogId = this.activeRoute.snapshot.params['id'];
    if(!this.blogId){
      this.router.navigate(['blogs/all']);
      return;
    }
    this.blogService.getBlogDetails(this.blogId).subscribe(res=>{
      console.log(res);
      if(res){
        this.showBlogDetails = true;
        this.blogDetails = res;
      }
    },(error)=>{
      this.showBlogDetails = false;
      alert(error);
    })
  }
  likeBlog(totalLikes,blogId){
    let likes = parseInt(totalLikes) + 1;
    this.blogService.likeBlog(likes,blogId).subscribe(res=>{
      if(res){
        this.ngOnInit();
      }
    },(error)=>{
      alert(error);
    })
  }
  unlikeBlog(totalLikes,blogId){
    let likes = parseInt(totalLikes) - 1;
    this.blogService.likeBlog(likes,blogId).subscribe(res=>{
      if(res){
        this.ngOnInit();
      }
    },(error)=>{
      alert(error);
    })
  }
  postComment(blogId,comments){
    const payload = {
        comment:this.comment,
        person_name:localStorage.getItem("name"),
        person_avatar:localStorage.getItem("image"),
        more_comments:[]
    };
    comments.push(payload);
    this.blogService.postComment(comments, blogId).subscribe(res=>{
      if(res){
        alert("Comment added successfully");
        this.showNewComment = false;
        this.ngOnInit();
      }
    },(error)=>{
      alert(error);
    })
  }
  removeComment(allComments,comment,blogId){
    console.log(allComments);
    console.log(comment);
    if (allComments.find(x => x.person_name == comment.person_name)) {
      allComments.splice(allComments.findIndex(x => x.person_name == comment.person_name), 1);
   }
   console.log(allComments);
   this.blogService.postComment(allComments,blogId).subscribe(res=>{
     if(res){
       alert("Comment deleted successfully");
     }
   },(error)=>{
     alert(error);
   })
    console.log(allComments);
  }

}
