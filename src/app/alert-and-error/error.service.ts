import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../auth/auth.service";
import {ApprovalDialogConfig} from "../dialogs/approval-dialog/ApprovalDialogConfig";
import {ApprovalDialogComponent} from "../dialogs/approval-dialog/approval-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private dialog: MatDialog,
              private authService:AuthService) { }

  handle(error: any): void {
    console.log(error)
    if (error.status === 400){
      this.handle_400(error);
    }else if (error.status === 403){
      this.handle_403(error);
    }else if (error.status === 404){
      this.handle_404(error);
    }else if (error.status === 500){
      this.handle_500(error);
    } else{
      this.handleDefault(error);
    }
  }
  private handle_400(error: any): void {
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Error', error.error.message, 'Try Again !')
    });
  }
  private handle_404(error: any): void {
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Error', error.error.message, 'Try Again !')
    });
  }
  private handle_403(error: any): void {
    this.dialog.open(ApprovalDialogComponent, {
      width: '450px',
      // height: '200px',
      data: new ApprovalDialogConfig('Error', "Error", "unauthorized access"  )
    }).afterClosed().subscribe(res=>{
      this.authService.logout();
    });
  }
  private handle_500(error: any): void {
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Error', 'Error!', error.error.error)
    });
  }
  private handleDefault(error: any): void {
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Error', 'Error!', 'Please Try Again Shortly!')
    });
  }
}
