import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {FuelTokenService} from "../../services/fuel-token.service";
import {FuelTokenDTO} from "../../dtos/FuelTokenDTO";

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
              private fuelTokenService: FuelTokenService) {
  }

  ngOnInit(): void {

    this.fuleForm = this.fb.group({
      filling_time_and_date: new FormControl('', Validators.required),
      request_quota: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      token_exp_date: new FormControl('', Validators.required),
      vehicle_reg_no: new FormControl('', Validators.required),
      fuel_station_fk: new FormControl('', Validators.required),
      pid_fk: new FormControl('', Validators.required),
      username_fk: new FormControl('', Validators.required)
    });
    // this.matDialog.open(ApprovalDialogComponent, {
    //     width: '350px',
    //     // height: '200px',
    //     data: new ApprovalDialogConfig('Error', 'Max Request Limit Exceed', '')
    //   }
    // );
  }

  onSave() {

    this.fuelTokenService.requestToken(new FuelTokenDTO(
      "0",
      this.fuleForm.get('vehicle_reg_no')?.value,
      'Pending',
      this.fuleForm.get('token_exp_date')?.value,
      this.fuleForm.get('filling_time_and_date')?.value,
      this.fuleForm.get('request_quota')?.value,
      this.fuleForm.get('username_fk')?.value,
      this.fuleForm.get('pid_fk')?.value,
      this.fuleForm.get('fuel_station_fk')?.value,
    )).subscribe(res => {

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
