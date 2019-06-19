import { BlogService } from './../../../services/user/blog/blog.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  updateBlogForm: FormGroup;
  submitted:boolean=false;
  blogId:any;
  constructor(private formBuilder: FormBuilder,public activeRoute:ActivatedRoute,public blogService:BlogService,
    public router:Router,public loaderService:LoaderService) { }

  ngOnInit() {
    this.blogId = this.activeRoute.snapshot.params['id'];

    this.updateBlogForm = this.formBuilder.group({
      title: ['', [Validators.required,Validators]],
      description: ['', [Validators.required]],
    });
    this.loaderService.start();
    this.blogService.getBlogDetails(this.blogId).subscribe(res=>{
    this.loaderService.stop();
      if(res){
        this.updateBlogForm.controls.title.setValue(res.title);
        this.updateBlogForm.controls.description.setValue(res.description);
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }
  get f() { return this.updateBlogForm.controls; }
  updateBlog(){
    this.submitted = true;

    if (this.updateBlogForm.invalid) {
        return;
    }
    const payload={
      title:this.updateBlogForm.controls.title.value,
      description:this.updateBlogForm.controls.description.value,
    }
    this.loaderService.start();
    this.blogService.updateBlog(payload,this.blogId).subscribe(res=>{
      this.loaderService.stop();      
      if(res){
        alert("Blog updated successfully");
        this.router.navigate(['blog/all']);
      }
    },(error)=>{
      this.loaderService.stop();
      alert(error);
    })
  }


}
