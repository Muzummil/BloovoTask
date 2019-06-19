import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [{
  path:'all',
  component:AllBlogsComponent
  },{
    path:'create',
    component:CreateBlogComponent
  },{
    path:'update/:id',
    component:UpdateBlogComponent
  },{
    path:'details/:id',
    component:BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
