import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapPagePage } from './map-page.page';
import { TabsModule } from '../components/tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TabsModule
  ],
  declarations: [MapPagePage]
})
export class MapPageModule { }