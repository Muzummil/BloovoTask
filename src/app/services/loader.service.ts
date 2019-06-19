import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoaderService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  start(){
    try{
      this.change.emit(true);
    }catch(e){}
  }
  stop(){
    try{
      this.change.emit(false);
    }catch(e){}
  }
  toggle() {
    try{
      this.isOpen = !this.isOpen;
      this.change.emit(this.isOpen);
    }catch(e){}
    // alert(this.isOpen); 
  }

}
