import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/user/blog/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  createBlogForm: FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder: FormBuilder, public router:Router,public blogService:BlogService) { }

  ngOnInit() {
    this.createBlogForm = this.formBuilder.group({
      title: ['', [Validators.required,Validators]],
      description: ['', [Validators.required]],
    });
  }
  get f() { return this.createBlogForm.controls; }
  createBlog(){
    this.submitted = true;

    if (this.createBlogForm.invalid) {
        return;
    }
    const payload={
      title:this.createBlogForm.controls.title.value,
      description:this.createBlogForm.controls.description.value,
    }
    this.blogService.createBlog(payload).subscribe(res=>{
      if(res){
        alert("Blog created successfully");
        this.router.navigate(['blog/all']);
      }
    },(error)=>{
      alert(error);
    })
  }

}
