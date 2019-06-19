import { Component,OnInit } from '@angular/core';
import { SharedModule } from './common/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloovoTask';
  public isLoggedIn=false;
  constructor(public sharedModule:SharedModule){
    this.isLoggedIn = this.sharedModule.isUserLoggedIn();
  }
  ngOnInit() {
    this.isLoggedIn = this.sharedModule.isUserLoggedIn();
  }
}
