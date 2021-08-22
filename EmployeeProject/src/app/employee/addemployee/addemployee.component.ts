import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss'],
})
export class AddemployeeComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
  });
  constructor(
    private employeesData: EmployeesService,
    public Dialog: MatDialogRef<AddemployeeComponent>
  ) {}
  onSubmit() {
    this.employeesData
      .addEmployee(this.form.value)
      .subscribe((response) => console.log(response));
    this.Dialog.close();
  }

  ngOnInit(): void {}
}
