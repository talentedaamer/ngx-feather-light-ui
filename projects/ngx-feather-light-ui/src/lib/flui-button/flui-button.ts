import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {FluiButtonVariants} from "../common/flui-types";

@Component({
  selector: 'flui-button',
  templateUrl: './flui-button.html',
  styleUrls: ['./flui-button.css'],
  host: {
    'class': 'flui-button',
    '[class.flui-rounded]': 'rounded',
    '[class.flui-disabled]': 'disabled',
    '[class.flui-button-link]': 'variant === "link"',
    '[class.flui-button-dark]': 'variant === "dark"',
    '[class.flui-button-light]': 'variant === "light"',
    '[class.flui-button-danger]': 'variant === "danger"',
    '[class.flui-button-primary]': 'variant === "primary"',
    '[class.flui-button-success]': 'variant === "success"',
  },
  encapsulation: ViewEncapsulation.None
})
export class FluiButton {

  @Input() variant: FluiButtonVariants = '';

  @Input() rounded: boolean = false;

  @Input() text: string = 'Button';

  @Input() disabled: boolean = false;

  @Output() isClicked: EventEmitter<any> = new EventEmitter<any>();

  isButtonClicked($event: any) {
    this.isClicked.emit($event);
  }
}
