import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngSwitch & ngSwitchCase Directive';
  name: string = null;

  constructor() {
  }

  SetName(employeeId: number) {
    switch (employeeId) {
      case 1: {
        this.name = "One";
        break;
      }
      case 2: {
        this.name = "Two";
        break;
      }
      case 3: {
        this.name = "Three";
        break;
      }
      default: {
        this.name = null;
        break;
      }
    }
  }
}