import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApprovalDialogComponent} from "../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../dialogs/approval-dialog/ApprovalDialogConfig";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetailsForm!: FormGroup;

  apiResponse=false;
  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private router: Router,
              private dialog:MatDialog
              ) { }

  ngOnInit(): void {
    this.loginDetailsForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  loginUser():void{
    this.router.navigateByUrl("/dashboard");
    if (this.loginDetailsForm.valid){
      this.apiResponse=true;
      this.authService.login(
        this.loginDetailsForm.get('userName')?.value,
        this.loginDetailsForm.get('password')?.value,
      ).subscribe(res=>{
        console.log('dd');
        console.log(res);
        this.apiResponse=false;
        if (res.code=="00"){
          this.router.navigateByUrl("/dashboard");

        }
      },error => {
        this.apiResponse=false;
      });
    }else {
      this.dialog.open(ApprovalDialogComponent, {
        width: '350px',
        // height: '200px',
        data: new ApprovalDialogConfig('Error', 'Error!', 'Please Insert All Values Correctly')
      });
    }
  }
  clear(){
    this.loginDetailsForm.reset();
  }

}
