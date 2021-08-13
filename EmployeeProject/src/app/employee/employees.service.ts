import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from './constants';

export interface SkillSet {
  name: string;
  rating: number;
}

export interface TravelPreference {
  domestic: boolean;
  international: boolean;
}

export interface EmployeeDetails {
  id: number;
  location: string;
  name: string;
  role: string;
  grade: string;
  skillSet: SkillSet[];
  travelPreference: TravelPreference;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}
  /*get request API to get an employee by id*/
  getEmployee(id: number): Observable<EmployeeDetails> {
    const URL = `${GlobalConstants.GET_EMP_URL}/${id}`;
    return this.http.get<EmployeeDetails>(URL);
  }
  /*get request API to get the list of all the employees  */
  getEmployees(): Observable<EmployeeDetails[]> {
    const URL = `${GlobalConstants.GET_EMP_URL}`;
    return this.http.get<EmployeeDetails[]>(URL);
  }
  /*delete API to delete an employee by id */
  deleteEmployee(id: number) {
    const URL = `${GlobalConstants.GET_EMP_URL}/${id}`;
    return this.http.delete(URL);
  }
  /*post request to add an employee */
  addEmployee(formData: FormData) {
    const URL = `${GlobalConstants.GET_EMP_URL}`;
    return this.http.post(URL, formData);
  }
}
