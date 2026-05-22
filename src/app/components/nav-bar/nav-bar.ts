import { Component, isDevMode } from '@angular/core';
import { RuxGlobalStatusBar, RuxButton } from '@astrouxds/angular';
import pkg from '../../../../package.json';

@Component({
  selector: 'app-nav-bar',
  imports: [RuxGlobalStatusBar, RuxButton],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.sass',
})
export class NavBar {
  appVersion: string = pkg.version;
  appState = 'Local-Development';
  githubUrl = 'https://github.com/Justinm98';
  linkedInUrl = 'https://www.linkedin.com/in/justin-maloney-59ba06192';

  constructor() {
    this.appState = isDevMode() ? 'Development' : 'Production';
  }

  goToLink(url: string) {
    console.log(url);
    window.open(url, "_blank");
  }
}
