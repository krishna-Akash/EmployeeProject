import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MaterialModule } from '../material.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './employees.service';
import { AlertBoxComponent } from './alert-box/alert-box.component';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailsComponent, AddemployeeComponent, AlertBoxComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[EmployeesService],
  exports: [EmployeeListComponent, EmployeeDetailsComponent,AddemployeeComponent]
})
export class EmployeeModule { }
