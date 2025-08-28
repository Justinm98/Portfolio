import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
/**
 * InfoCardComponent
 */
export class InfoCardComponent implements OnInit {
  CARD_STYLE_PREFIX: string = 'info-card-';
  IMAGE_STYLE_PREFIX: string = 'image-';
  LEFT: string = 'left';
  RIGHT: string = 'right';
  @Input() cardPosition: string = this.LEFT;
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  infoCardStyle: string = this.CARD_STYLE_PREFIX + this.LEFT;
  imageStyle: string = this.IMAGE_STYLE_PREFIX + this.RIGHT;

  /**
   * constructor
   */
  constructor() {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    if (this.isCardPositionRight()) {
      this.infoCardStyle = this.CARD_STYLE_PREFIX + this.RIGHT;
      this.imageStyle = this.IMAGE_STYLE_PREFIX + this.LEFT;
    }
  }

  /**
   * Check if position is right
   * @return {boolean} true is position is right
   */
  isCardPositionRight(): boolean {
    return this.cardPosition === 'right';
  }
}
