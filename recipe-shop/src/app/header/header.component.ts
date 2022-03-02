import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router, private logged: LoginService) {}
  isLoggedIn = JSON.parse(localStorage.getItem('logged'));
  private userSub: Subscription;

  ngOnInit(): void {
    this.userSub = this.logged.user.subscribe((res) => {
      localStorage.setItem('logged', JSON.stringify(!!res));
      this.isLoggedIn = JSON.parse(localStorage.getItem('logged'));
    });
  }

  logoutUser() {
    this.logged.logout();
  }

  toCad() {
    this.route.navigate(['/cadastro']);
  }
  toLogin() {
    this.route.navigate(['/login']);
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
