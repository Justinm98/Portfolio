import { Component, isDevMode } from '@angular/core';
import { RuxGlobalStatusBar, RuxButton, RuxClock, RuxTabs, RuxTab } from '@astrouxds/angular';
import pkg from '../../../../package.json';

@Component({
  selector: 'app-nav-bar',
  imports: [RuxGlobalStatusBar, RuxButton, RuxClock, RuxTabs, RuxTab],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.sass',
})
export class NavBar {
  appVersion: string = pkg.version;
  appState: string = 'Local-Development';
  githubUrl: string = 'https://github.com/Justinm98';
  linkedInUrl: string = 'https://www.linkedin.com/in/justin-maloney-59ba06192';
  resumeFilePath: string = '/resume.pdf';

  constructor() {
    this.appState = isDevMode() ? 'Development' : 'Production';
  }

  goToLink(url: string) {
    console.log(url);
    window.open(url, "_blank");
  }

  downloadResume(): void {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = this.resumeFilePath;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

