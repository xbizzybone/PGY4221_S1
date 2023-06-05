import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  // add register variables
  protected name!: string;
  protected lastname!: string;
  protected email!: string;
  protected password!: string;
  protected password2!: string;


  constructor() { }

  ngOnInit() {
  }

}
