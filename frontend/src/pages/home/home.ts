import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    brightness: number = 20;
    contrast: number = 0;
    warmth: number = 1300;
    structure: any = { lower: 33, upper: 60 };
    text: number = 0;

    constructor(public navCtrl: NavController) {

    }

}
