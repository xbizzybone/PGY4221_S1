import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TabsModule } from '../components/tabs/tabs.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, TabsModule, CommonModule],
})
export class HomePage {
  cities = [
    { name: 'Santiago', image: 'https://elviajerofeliz.com/wp-content/uploads/2019/10/Ciudades-de-Chile.jpg' },
    { name: 'Concepción', image: 'https://elviajerofeliz.com/wp-content/uploads/2019/10/Ciudades-de-Chile.Concepci%C3%B3n.jpg' },
    { name: 'La Serena', image: 'https://elviajerofeliz.com/wp-content/uploads/2019/10/Ciudades-de-Chile.La-Serena.jpg' },
    // más ciudades aquí...
  ];

  constructor(private router: Router) {}

  goToCity(city: any): void {
    this.router.navigate(['city', city.name]);
  }
}
