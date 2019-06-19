import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
        path: '',
        loadChildren: './pages/user/users.module#UsersModule'
    }]
  },
  {
    path: 'user',
    children: [{
        path: '',
        loadChildren: './pages/user/users.module#UsersModule'
    }]
  },
  {
    path: 'blog',
    children: [{
        path: '',
        loadChildren: './pages/blogs/blogs.module#BlogsModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
