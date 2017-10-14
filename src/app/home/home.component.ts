import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  results: string[];
  result: string;
  model = {'username': '', 'password': ''};
  private currentUserName;
  constructor(private http: HttpClient, private loginService: LoginService) {}

  ngOnInit(): void {
    const headers = new HttpHeaders({'Accept': 'application/json'});
    // Make the HTTP request:
    this.http.get('http://localhost:8080/robbie/api/item3', {headers: headers}).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      // this.result = data['result']
    });
  }
  onSubmit() {
    this.loginService.sendCredentials(this.model).subscribe(data => {
      console.log(data);
      console.log(data.body);
      // alert(data);
      localStorage.setItem('token', data.body);
      this.loginService.sendToken(localStorage.getItem('token')).subscribe(response => {
        this.currentUserName = this.model.username;
        localStorage.setItem('currentUserName', this.model.username);
        this.model.username = '';
        this.model.password = '';
      });
    }, err => console.log(err));
  }

  logout() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

  get loginServiceRef() {
    return this.loginService;
  }
}
