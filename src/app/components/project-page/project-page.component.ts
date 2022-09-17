import {Component} from '@angular/core';

@Component({
  selector: 'app-project-page',
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
