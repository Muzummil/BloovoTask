import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
  })
export class PopupService {

    showAlert(title: string, text: string, type: any, btnClass: string) {
        // swal({
        //   title: title,
        //   text: text,
        //   buttonsStyling: false,
        //   confirmButtonClass: "btn btn-fill "+btnClass,
        //   type: type
        // }).catch(swal.close);
    }
    // type: 'error',
    // confirmButtonClass: "btn btn-fill btn-info",

}