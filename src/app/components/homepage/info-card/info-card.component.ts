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
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  LEFT_STYLE: string = 'info-card-left';
  RIGHT_STYLE: string = 'info-card-right';
  infoCardStyle: string = this.LEFT_STYLE;

  /**
   * constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    if (this.isPositionRight()) {
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
