import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
/**
 * InfoCardComponent
 */
export class InfoCardComponent implements OnInit {
  @Input() position: string = 'left';
  LEFT_STYLE: string = 'info-card-left';
  RIGHT_STYLE: string = 'info-card-right';
  public infoCardStyle: string = this.LEFT_STYLE;

  /**
   * constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    if (this.isPositionRight()) {
      console.log(this.position);
      this.infoCardStyle = this.RIGHT_STYLE;
    }
  }

  /**
   * Check if position is right
   * @return {boolean} true is position is right
   */
  isPositionRight(): boolean {
    return this.position === 'right';
  }
}
