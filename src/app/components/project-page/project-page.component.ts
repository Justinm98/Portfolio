import {Component} from '@angular/core';
import {InfoCardComponent} from '../common/info-card/info-card.component';

@Component({
  selector: 'app-project-page',
  imports: [InfoCardComponent],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
/**
 * ProjectPage
 */
export class ProjectPageComponent {
  educationDescription: string = 'virginia tech';
  lockheedMartinDescription: string = 'lockheed martin';
  geekSquadDescription: string = 'geek squad';

  /**
   * constructor
   */
  constructor() {}
}
