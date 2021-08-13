import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeDetails, EmployeesService } from "src/app/employee/employees.service";
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})

export class EmployeeDetailsComponent implements OnInit {
  public paramValue: number = 0
  public Employeedata: EmployeeDetails | any;
  constructor(private route: ActivatedRoute, private employeeData: EmployeesService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => { this.paramValue = params.id })
    this.employeeData.getEmployee(this.paramValue).subscribe((data) => this.Employeedata = data)
  }
}
