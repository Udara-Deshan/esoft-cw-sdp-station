import { Component, OnInit } from '@angular/core';
import {FuelTokenService} from "../../services/fuel-token.service";
import {MatDialog} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../dialogs/approval-dialog/ApprovalDialogConfig";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";

@Component({
  selector: 'app-fuel-station-tokens',
  templateUrl: './fuel-station-tokens.component.html',
  styleUrls: ['./fuel-station-tokens.component.scss']
})
export class FuelStationTokensComponent implements OnInit {

  displayedColumn: string[] = ['action','tid',  'fillingTimeAnd',  'requestQuota',  'status' ,
    'tokenExp',  'vehicleRegNo',  'fuelStationFk' , 'pidFk' , 'usernameFk'];
  displayedColumnf: string[] = ['tid',  'fillingTimeAnd',  'requestQuota',  'status' ,
    'tokenExp',  'vehicleRegNo',  'fuelStationFk' , 'pidFk' , 'usernameFk'];
  dataSource:any[] = [];
  constructor(private tokenService:FuelTokenService,
              private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.tokenService.getAllTokenByFuelStationId().subscribe((res:any)=>{
      console.log(res)
      if (res.code==201){

        this.dataSource=res.data;
      }
    })
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
