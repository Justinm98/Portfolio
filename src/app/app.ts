import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Material modules are fine to import into a standalone component
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // for *ngIf, *ngFor, etc.
    RouterOutlet, // for <router-outlet>
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
/**
 * AppComponent
 */
export class App {
  private theme = inject(ThemeService);
  currentTheme = this.theme.current; // signal for template binding

  switchTheme() {
    this.theme.toggle();
  }
}
