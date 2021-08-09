import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaterialModule } from '../material.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [EmployeeListComponent, EmployeeDetailsComponent]
})
export class EmployeeModule { }
