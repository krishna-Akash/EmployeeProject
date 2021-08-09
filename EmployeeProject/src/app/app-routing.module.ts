import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
