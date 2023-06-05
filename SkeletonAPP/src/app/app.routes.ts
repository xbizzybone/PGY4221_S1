import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'home/map-page',
    redirectTo: 'map-page',
    pathMatch: 'full',
  },
  {
    path: 'home/home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/settings',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: 'map-page/map-page',
    redirectTo: 'map-page',
    pathMatch: 'full',
  },
  {
    path: 'map-page/home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'map-page/settings',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: 'settings/map-page',
    redirectTo: 'map-page',
    pathMatch: 'full',
  },
  {
    path: 'settings/home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'settings/settings',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'map-page',
    loadComponent: () => import('./map-page/map-page.page').then( m => m.MapPagePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage),
    canActivate: [AuthGuard]
  },
];