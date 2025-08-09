import {Component} from '@angular/core';
import {InfoCardComponent} from '../common/info-card/info-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
/**
 * HomepageComponent
 */
export class HomepageComponent {
  /**
   * constructor
   */
  constructor() {}
}
