import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Injectable } from '@angular/core';
import { SharedModule } from '../../../common/shared.module';

@Injectable({
    providedIn: 'root'
  })
export class BlogService {

  constructor(private http: HttpClient, public shared: SharedModule) { }
  baseUrl: string = this.shared.getBaseUrl();
  getAllBlogs(): Observable<any> {
    return this.http.get(this.baseUrl + 'blogs');
  }
  getBlogDetails(id): Observable<any> {
    return this.http.get(this.baseUrl + 'blogs/' + id);
  }
  createBlog(blogPayload): Observable<any> {
    return this.http.post(this.baseUrl + 'blogs/' , blogPayload);
  }
  updateBlog(blogPayload, id): Observable<any> {
    return this.http.put(this.baseUrl + 'blogs/' + id , blogPayload);
  }
  likeBlog(likes, id): Observable<any> {
    return this.http.put(this.baseUrl + 'blogs/' + id , { 'likes' : likes});
  }
  postComment(commentData, id): Observable<any> {
    return this.http.put(this.baseUrl + 'blogs/' + id , {'comments': commentData});
  }
  deleteBlog(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'blogs/' + id);
  }
}