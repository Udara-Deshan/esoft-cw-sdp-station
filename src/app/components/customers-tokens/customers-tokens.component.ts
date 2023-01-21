import { Component, OnInit } from '@angular/core';
import {FuelTokenService} from "../../services/fuel-token.service";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";
import {FuelStationService} from "../../services/fuel-station.service";

@Component({
  selector: 'app-customers-tokens',
  templateUrl: './customers-tokens.component.html',
  styleUrls: ['./customers-tokens.component.scss']
})
export class CustomersTokensComponent implements OnInit {

  displayedColumn: string[] = ['action','tid',  'fillingTimeAnd',  'requestQuota',  'status' ,
    'tokenExp',  'vehicleRegNo',  'fuelStationFk' , 'pidFk' , 'usernameFk'];
  displayedColumnf: string[] = ['tid',  'fillingTimeAnd',  'requestQuota',  'status' ,
    'tokenExp',  'vehicleRegNo',  'fuelStationFk' , 'pidFk' , 'usernameFk'];
  dataSource:any[] = [];
  constructor(private tokenService:FuelTokenService,
              private fuelStationService:FuelStationService,
              private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.tokenService.getAllTokenByFuelStationId().subscribe((res:any)=>{
      console.log(res)
      if (res.code==201){
        this.dataSource=res.data;
      }
    })

    // this.dataSource=[
    //   {
    //     tid: 1,
    //     filling_time_and_date :'2022-12 - 02',
    //     request_quota :5,
    //     status:'Accept',
    //     token_exp_date :'2022-12 - 02',
    //     vehicle_reg_no:6129,
    //     fuel_station:1,
    //     pid:3,
    //     username:'udarasan'
    //   }
    // ]



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
    this.tokenService.changeTokenStatus(element.tid,'FINISHED').subscribe((res:any)=>{

    })
  }
}
