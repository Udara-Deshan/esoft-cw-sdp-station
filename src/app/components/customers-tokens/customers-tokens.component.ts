import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";

@Component({
  selector: 'app-customers-tokens',
  templateUrl: './customers-tokens.component.html',
  styleUrls: ['./customers-tokens.component.scss']
})
export class CustomersTokensComponent implements OnInit {
  // displayedColumns: string[] = ['action','categoryID', 'categoryName', 'categoryDesc'];
  displayedColumn: string[] = ['action','tid',  'filling_time_and_date',  'request_quota',  'status' ,   'token_exp_date',  'vehicle_reg_no',  'fuel_station' , 'pid' , 'username'];
  displayedColumnf: string[] = ['tid',  'filling_time_and_date',  'request_quota',  'status' ,   'token_exp_date',  'vehicle_reg_no',  'fuel_station' , 'pid' , 'username'];
  dataSource:any[] = [];
  constructor(private tokenService:TokenService,
              private matDialog:MatDialog,

  ) { }

  ngOnInit(): void {
    this.dataSource=[
      {
        tid: 1,
        filling_time_and_date :'2022-12 - 02',
        request_quota :5,
        status:'Accept',
        token_exp_date :'2022-12 - 02',
        vehicle_reg_no:6129,
        fuel_station:1,
        pid:3,
        username:'udarasan'
      }
    ]
    // this.tokenService.
    // getAll().subscribe((res:any)=>{
    //   if (res.code=='00'){
    //     this.dataSource=res.content;
    //   }
    // });



  }


  onUpdate(element:any) {
  }

  onDelete(element:any) {
    this.matDialog.open(ApprovalDialogComponent, {
        width: '450px',
        // height: '200px',
        data: new ApprovalDialogConfig('Error', 'Token Deleted', '')
      }
    );
  }


  onAction(element: any) {
    this.matDialog.open(QrDialogComponent, {
        width: '450px',
        // height: '200px',
        data: null
      }
    );
  }
}
