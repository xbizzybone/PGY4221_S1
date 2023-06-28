import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TabsModule } from '../components/tabs/tabs.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, TabsModule, CommonModule],
})
export class HomePage {
  cities : any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.cities = data; // 'data' es ahora el array 'data' de la respuesta
    });
  }
}
