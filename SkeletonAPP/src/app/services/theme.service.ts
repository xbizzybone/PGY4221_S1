import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  async loadTheme() {
    const { value } = await Storage['get']({ key: 'darkMode' });
    this.darkMode = value === 'true';
    document.body.classList.toggle('dark', this.darkMode);
  }

  darkModeEnabled() {
    return this.darkMode;
  }

  async toggleDarkMode() {
    this.darkMode = !this.darkMode;
    await Storage['set']({ key: 'darkMode', value: String(this.darkMode) });
    document.body.classList.toggle('dark', this.darkMode);
  }
}