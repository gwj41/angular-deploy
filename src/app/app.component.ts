import { Component } from '@angular/core';
import { User } from './domain/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: User = new User(1, 'Terry', 25);
  constructor() {}

  handleBoom(event) {
    console.log(event);
  }

  changeDetectionDefault() {
    this.user.name = 'tom';
    this.user.age = 21;
  }

  changeDetectionOnPush() {
    this.user = new User(2, 'robbie', 30);
  }
}
