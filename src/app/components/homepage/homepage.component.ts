import {Component} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
/**
 * HomepageComponent
 */
export class HomepageComponent {
  educationDescription: string = 'virginia tech';
  lockheedMartinDescription: string = 'lockheed martin';
  geekSquadDescription: string = 'geek squad';

  /**
   * constructor
   */
  constructor() {}
}
