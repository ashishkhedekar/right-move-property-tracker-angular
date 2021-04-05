import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'propertytracker-angular';
  public expand = false;

  constructor() {
  }

  toggle()
  {
    console.log('Menu to be showed before' + this.expand);
    this.expand = !this.expand;
    console.log('Menu to be showed after' + this.expand);
  }
}
