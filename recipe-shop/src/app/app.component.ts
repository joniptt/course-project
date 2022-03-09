import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  closed = true;
  constructor(private route: Router) {}

  toPM() {
    this.route.navigate['/computadores'];
  }
  closeNav() {
    this.closed = this.closed = true;
  }
  openMenu() {
    this.closed = this.closed = false;
  }
}
