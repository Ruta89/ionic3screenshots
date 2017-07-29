import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  screen: any;
  state: boolean = false;

  constructor(public navCtrl: NavController, private screenshot: Screenshot) {}

  reset() {
    let self = this;
    setTimeout(() => {
      self.state = false;
    }, 1000);
  }

  screenShot() {
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
  }

  screenShotURI() {
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    });
  }
}
