import { SchoolRecordsComponent } from './school-records/school-records.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "schoolrecords", component: SchoolRecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
