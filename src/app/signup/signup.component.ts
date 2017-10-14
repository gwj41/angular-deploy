import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.createForms();
  }

  public form: FormGroup;

  public form2: FormGroup;

  ngOnInit() {
    // this.createForms();
  }

  log(x) {
    console.log(x);
  }

  createForms() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      password: new FormControl('', Validators.required)
    });
    this.form2 = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.maxLength(11)]],
      address: ['', [Validators.maxLength(20), Validators.minLength(3)]],
      // phone: '',
      // email: '',
      // address: ''
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get phone() {
    return this.form2.get('phone');
  }
  get address() {
    return this.form2.get('address');
  }

}
