import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
  books = [{'id': 1, 'name': 'Nginx in action'}, {'id': 2, 'name': 'Rxjs in action'}, {'id': 3, 'name': 'Bootstrap blueprint'}];
  ngOnInit() {
  }

  onKeyup(email: string) {
    console.log(email);
  }

  log(x) {
    console.log(x);
  }

  submitForm(x) {
    console.log(x);
  }
}
