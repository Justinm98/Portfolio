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
  LIGHT_THEME_CLASS: string = 'theme-alternate';

  /**
   * Switches app theme to the opposite of current theme
   */
  public switchTheme() {
    if (this.isCurrentThemeLight()) {
      this.enableDarkTheme();
    } else {
      this.enableLightTheme();
    }
  }

  /**
   * Checks if light theme class in applied to document body
   * @return {boolean} true if light theme is in body class list
   */
  public isCurrentThemeLight(): boolean {
    return document.body.classList.contains(this.LIGHT_THEME_CLASS);
  }

  /**
   * Checks if light theme class in applied to document body
   * @return {boolean} true if light theme is in body class list
   */
  public isCurrentThemeDark(): boolean {
    return !document.body.classList.contains(this.LIGHT_THEME_CLASS);
  }

  /**
   * Removes light theme from body class list to enable dark theme
   */
  private enableDarkTheme() {
    document.body.classList.remove(this.LIGHT_THEME_CLASS);
  }

  /**
   * Adds light theme to body class list to enable light theme
   */
  private enableLightTheme() {
    document.body.classList.add(this.LIGHT_THEME_CLASS);
  }
}
