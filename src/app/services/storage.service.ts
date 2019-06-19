import { Injectable } from '@angular/core';
import { _ } from 'underscore';
@Injectable({
    providedIn: 'root',
  })
export class StorageService {

  public clearStorage(){
    return localStorage.clear();
    }
    public addDataByIndex(index:any,data:any){
        return localStorage.setItem(index,data);
    }
  public getDataByIndex(index:any){
      if(_.size(localStorage)>0 && localStorage.getItem(index)){
        return localStorage.getItem(index);
      }
      return null;
  }

}