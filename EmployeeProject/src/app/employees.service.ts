import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  getEmployee(id: number) {
    let url = `http://dummy.restapiexample.com/api/v1/employee/${id}`
    return this.http.get(url)
  }
  getEmployees() {
    let url = "http://dummy.restapiexample.com/api/v1/employees"
    return this.http.get(url)
  }
}
