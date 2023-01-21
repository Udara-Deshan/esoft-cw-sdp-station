import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {FuelTokenService} from "../../services/fuel-token.service";
import {FuelTokenDTO} from "../../dtos/FuelTokenDTO";
import {FuelStationService} from "../../services/fuel-station.service";

@Component({
  selector: 'app-fuel-request-form',
  templateUrl: './fuel-request-form.component.html',
  styleUrls: ['./fuel-request-form.component.scss']
})
export class FuelRequestFormComponent implements OnInit {
  formMode: 'SAVE' | 'UPDATE' = 'SAVE';
  fuleForm!: FormGroup;
  filteredFuleStations: string[] = ['Delkanda'];

  constructor(private fb: FormBuilder,
              private matDialog: MatDialog,
              private fuelStationService: FuelStationService) {
  }

  ngOnInit(): void {

    this.fuleForm = this.fb.group({
      quota: new FormControl('', Validators.required)
    });
    // this.matDialog.open(ApprovalDialogComponent, {
    //     width: '350px',
    //     // height: '200px',
    //     data: new ApprovalDialogConfig('Error', 'Max Request Limit Exceed', '')
    //   }
    // );
  }

  onSave() {

    this.fuelStationService.requestFuel(this.fuleForm.get('quota')?.value).subscribe(res => {

    })
    // this.matDialog.open(ApprovalDialogComponent, {
    //     width: '350px',
    //     // height: '200px',
    //     data: new ApprovalDialogConfig('Alert', 'Request Successfully', '')
    //   }
    // );
  }

  onUpdate() {

  }

  onBack() {

  }

  resetForm() {
    this.fuleForm.reset();
  }

}
