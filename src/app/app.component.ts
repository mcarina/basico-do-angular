import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'm.karinah'
  userData={
    email: 'mkarinah@gmail.com',
    role: "admin"
  }
  title = 'projAng';
}
