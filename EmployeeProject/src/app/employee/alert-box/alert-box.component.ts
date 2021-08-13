import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesService } from '../employees.service';
export interface rowId {
  id: number;
}
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss'],
})
export class AlertBoxComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: rowId,
    private employeesData: EmployeesService,
    public dialog: MatDialogRef<AlertBoxComponent>
  ) {}

  ngOnInit(): void {}
  DelEmp() {
    this.employeesData
      .deleteEmployee(this.data.id)
      .subscribe((result) => console.log(result));
    this.dialog.close();
  }
}
