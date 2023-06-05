import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsModule } from '../components/tabs/tabs.module';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TabsModule]
})
export class MapPagePage implements AfterViewInit {
  private map!: L.Map;

  constructor() { }

  ngAfterViewInit() {
    this.map = L.map('map').setView([-33.45694, -70.64827], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

}
