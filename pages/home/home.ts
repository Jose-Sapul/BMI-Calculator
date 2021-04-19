import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  H: number;
  W: number;
  BMI: number;
  TXT: string;

  constructor(public navCtrl: NavController) {

  }

  calculateBMI() {
    this.BMI =  this.W/(this.H * this.H)
    this.BMI = parseFloat (this.BMI.toFixed(2));
    
    if (this.BMI < 18.5) {
      this.TXT = "Underweight";
      
  } else if (this.BMI >= 18.5 && this.BMI < 24.5) {
    this.TXT = "Normal";

  } else if (this.BMI >= 24.5 && this.BMI < 30) {
    this.TXT = "Overweight";
  } else {

    this.TXT = "Obese";
  }


  }

}