import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BlogsRoutingModule } from './blogs-routing.module';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    AllBlogsComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BlogsRoutingModule,
    EditorModule
  ]
})
export class BlogsModule { }
