import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TabsModule } from '../components/tabs/tabs.module';
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [TabsModule, CommonModule, IonicModule, FormsModule]
})
export class SettingsPage {
  darkMode = false;
  notificaciones = false;
  language = 'es';
  money = 'clp'; 

  constructor(private themeService: ThemeService) {
    this.darkMode = this.themeService.darkModeEnabled();
    this.notificaciones = false;
    this.language = 'es';
    this.money = 'clp';
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  toggleNotificaciones() {
    this.notificaciones = !this.notificaciones;
  }

  toggleLanguage() {
    this.language = this.language == 'es' ? 'en' : 'es';
  } 

  toggleMoney() {
    this.money = this.money == 'clp' ? 'usd' : 'clp';
  }
}