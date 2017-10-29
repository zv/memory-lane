import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController) {

  }

    playMusic(name) {
        window.currentlyPlaying = new Audio(`${name}.mp3`).play()
    }

    pauseMusic(name) {
        
    }
}
