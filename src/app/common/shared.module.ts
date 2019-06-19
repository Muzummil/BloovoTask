import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from 'underscore'
import { StorageService } from '../services/storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports : [ ]
})

export class SharedModule {

  constructor(public storageService:StorageService){}
  public isUserLoggedIn():boolean{
    let email   = this.storageService.getDataByIndex("email");
    let name   = this.storageService.getDataByIndex("name");
    let id   = this.storageService.getDataByIndex("id");
    if((email || email!=undefined) && (name || name!=undefined) && (id || id!=undefined)){
      return true;
    }
    else{
      return false;
    }
  }
  public getBaseUrl():string {
    return "https://5d0925e5034e500014010f80.mockapi.io/bloovo/"; 
}
  public getImagesBaseUrl():string {
    return "to be set";
  }
  public parseJson(response:any) {
    try {
      let data = JSON.parse(response['body']);
      return data;
    } catch(e){
      return false;
    }
  }
}
