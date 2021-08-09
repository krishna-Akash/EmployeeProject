import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export interface Values {
  id: number,
  name: string,
  jobTitle: string,
  place: string,
  address: string
}
const EMPLOYEES: Values[] = [
  {
    "id": 1,
    "name": "Ramesh",
    "jobTitle": "Software Developer",
    "place": "Hyderabad",
    "address": "13B, Gachibowli"
  },
  {
    "id": 2,
    "name": "Suresh",
    "jobTitle": "Software Developer",
    "place": "Hyderabad",
    "address": "303, 3rd floor, road no. 12, vivekanandapura"
  },
  {
    "id": 3,
    "name": "Mahesh",
    "jobTitle": "Product Manager",
    "place": "Hyderabad",
    "address": "16-2-23/2, PNR High Nest, NH 9, Dharma Reddy Colony Phase II, KPHB"
  },
  {
    "id": 4,
    "name": "Mukesh",
    "jobTitle": "Frontend Engineer",
    "place": "Hyderabad",
    "address": "Vessella Meadows, Taramati Baradari, Osman Sagar Rd, Ramdev Guda, Ibrahim Bagh"
  },
  {
    "id": 5,
    "name": "Bhimesh",
    "jobTitle": "Backend Engineer",
    "place": "Hyderabad",
    "address": "Dream Valley Township, Tanasha Nagar, Manikonda Rd, OU Colony, Shaikpet"
  },
  {
    "id": 6,
    "name": "Pravesh",
    "jobTitle": "CEO",
    "place": "Hyderabad",
    "address": "Divine Allura Gated Community, 1-170/3/1, Lane Besides KS Bakers, Rd Number 7, Chanda Nagar"
  }
];

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})

export class EmployeeDetailsComponent implements OnInit {
  public paramValue: number = 0
  data = EMPLOYEES
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => { this.paramValue = params.id })
  }

}
