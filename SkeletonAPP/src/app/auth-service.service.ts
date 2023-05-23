import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: any, password: any): void {
    this.isAuthenticated = false;
    if (typeof username !== 'string' || typeof password !== 'string') {
      return;
    }
    
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.router.navigate(['/welcome']);
    } 

    return;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}