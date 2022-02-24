import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthUser } from '../login/auth-user.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private route: Router, private logged: LoginService) {}
  isLoggedIn = false;
  isLoggedOut = true;
  loggedIn: AuthUser = JSON.parse(localStorage.getItem('user'));
  private userSub: Subscription;

  ngOnInit(): void {
    this.userSub = this.logged.user.subscribe((res) => {
      this.isLoggedIn = !!res;
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
