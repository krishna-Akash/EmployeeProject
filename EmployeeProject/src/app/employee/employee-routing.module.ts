import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/employeeList', pathMatch: 'full'
  },
  {
    path: 'employeeDetails/:id', component: EmployeeDetailsComponent
  },
  {
    path: 'employeeList', component: EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
