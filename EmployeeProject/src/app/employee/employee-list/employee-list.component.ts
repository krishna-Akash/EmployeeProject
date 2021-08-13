import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  EmployeeDetails,
  EmployeesService,
} from 'src/app/employee/employees.service';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'location',
    'role',
    'grade',
    'action',
  ];
  dataSource: EmployeeDetails[] = [];
  constructor(
    private router: Router,
    private employeesData: EmployeesService,
    public dialog: MatDialog
  ) {}
  routeTo(id: number) {
    this.router.navigate([`/employeeDetails/${id}`]);
  }
  openDialog() {
    this.dialog.open(AddemployeeComponent, {
      height: '350px',
      width: '350px',
      disableClose: true,
    });
  }
  ngOnInit(): void {
    this.employeesData
      .getEmployees()
      .subscribe((data) => (this.dataSource = data));
  }
  alert(id: number) {
    this.dialog
      .open(AlertBoxComponent, {
        data: { id: id },
      })
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }
}
