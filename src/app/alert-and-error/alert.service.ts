import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from "@angular/common/http";
// import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private dialog: MatDialog,
  ) { }

  handle(request: HttpRequest<any>,
         evt: HttpSentEvent | HttpHeaderResponse |
           HttpResponse<any> | HttpProgressEvent |
           HttpUserEvent<any>): void{
    if (evt instanceof HttpResponse) {
      console.log(evt)
      if (request.method === 'GET'){
      }else {
        if (evt.body.code === 204){
          this.handle_204(evt.body);
        }else if (evt.body.code === 201){
          this.handle_201(evt.body);
        }else if (evt.body.code === '00'){
          this.handle_201(evt.body);
        }
      }
    }
  }

  private handle_204(body: any): void {
    // this.toasterService.info(body.message);
  }

  private handle_201(body: any): void {
    // this.toasterService.success(body.message);
  }
}
