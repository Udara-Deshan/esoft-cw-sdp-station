import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApprovalDialogComponent} from "./dialogs/approval-dialog/approval-dialog.component";
import {TopBarComponent} from "./dashboard/inner-com/top-bar/top-bar.component";
import {LeftSideNavBarComponent} from "./dashboard/inner-com/left-side-nav-bar/left-side-nav-bar.component";
import {MenuContainerComponent} from "./dashboard/inner-com/left-side-nav-bar/menu-container/menu-container.component";
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {AlertAndErrorInterceptor} from "./alert-and-error/alert-and-error.interceptor";
import { FuelRequestFormComponent } from './components/fuel-request-form/fuel-request-form.component';
import { CustomersTokensComponent } from './components/customers-tokens/customers-tokens.component';
import { StationFuelLevelComponent } from './components/station-fuel-level/station-fuel-level.component';
import { QrDialogComponent } from './components/qr-dialog/qr-dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    ApprovalDialogComponent,
    TopBarComponent,
    LeftSideNavBarComponent,
    MenuContainerComponent,
    FuelRequestFormComponent,
    CustomersTokensComponent,
    StationFuelLevelComponent,
    QrDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    // ToastrModule.forRoot(),
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [AuthGuard
    , {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AlertAndErrorInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
