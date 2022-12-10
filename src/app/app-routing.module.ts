import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FuelRequestFormComponent} from "./components/fuel-request-form/fuel-request-form.component";
import {CustomersTokensComponent} from "./components/customers-tokens/customers-tokens.component";
import {StationFuelLevelComponent} from "./components/station-fuel-level/station-fuel-level.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
      {path:'',component:StationFuelLevelComponent},
      {path:'fuel',component:FuelRequestFormComponent},
      {path:'customers',component:CustomersTokensComponent}
    ]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
