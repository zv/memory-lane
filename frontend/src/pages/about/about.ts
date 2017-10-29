import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController) {

  }

    is_listening() {
        if (window.currentlyPlaying) {
            return "Pause"
        } else {
            return "Listen"
        }
    }

    playMusic(name) {
        if (window.currentlyPlaying) {
            window.currentlyPlaying.pause()
            window.currentlyPlaying = null;
        } else {
            window.currentlyPlaying = new Audio(`${name}.mp3`)
            window.currentlyPlaying.play()
        }
    }

    pauseMusic(name) {
        
    }
}
