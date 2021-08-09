import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  id: number,
  emp_name: string,
  email: string,
  contact_no: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, emp_name: 'Ramesh', email: 'ramesh@adjoint.in', contact_no: '91+ 8545231457' },
  { id: 2, emp_name: 'Suresh', email: 'suresh@adjoint.in', contact_no: '91+ 8563231457' },
  { id: 3, emp_name: 'Mahesh', email: 'mahesh@adjoint.in', contact_no: '91+ 8562231457' },
  { id: 4, emp_name: 'Mukesh', email: 'mukesh@adjoint.in', contact_no: '91+ 8523531457' },
  { id: 5, emp_name: 'Bhimesh', email: 'Bhimesh@adjoint.in', contact_no: '91+ 8588231457' },
  { id: 6, emp_name: 'Pravesh', email: 'pravesh@adjoint.in', contact_no: '91+ 8510231457' },
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-email', 'demo-contact'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }
  redirect(id: number) {
    this.router.navigate([`/employeeDetails/${id}`])
  }

  ngOnInit(): void {
  }

}
