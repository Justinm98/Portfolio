import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/**
 * AppComponent
 */
export class AppComponent {
  DARK_MODE: string = 'dark-mode';
  LIGHT_MODE: string = 'light-mode';
  currentTheme: string = this.DARK_MODE;

  /**
   * Switches app theme to the opposite of current theme
   */
  public switchTheme() {
    const nextTheme: string = this.getOppositeTheme();
    this.currentTheme = nextTheme;
    document.body.className = nextTheme;
  }

  /**
   * returns the opposite theme string
   * @return {string} the opposite of the current theme. dark-mode or light-mode
   */
  private getOppositeTheme(): string {
    return this.currentTheme === this.DARK_MODE ? this.LIGHT_MODE : this.DARK_MODE;
  }

  /**
   * checks if current theme is dark mode
   * @return {boolean} true if current theme is dark mode
   */
  public isDarkMode(): boolean {
    return this.currentTheme === this.DARK_MODE;
  }

  /**
   * checks if current theme is light mode
   * @return {boolean} true if current theme is light mode
   */
  public isLightMode(): boolean {
    return this.currentTheme === this.LIGHT_MODE;
  }
}
