import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  onSubmit() {
    console.log(this.form.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
