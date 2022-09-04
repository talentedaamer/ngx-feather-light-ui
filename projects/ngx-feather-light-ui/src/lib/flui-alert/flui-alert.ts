import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FluiAlertVariants } from "../common/flui-types";

@Component({
  selector: 'flui-alert',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./flui-alert.css'],
  host: {
    'class': 'flui-alert',
    '[class.flui-alert-primary]': 'variant === "primary"',
    '[class.flui-alert-success]': 'variant === "success"',
    '[class.flui-alert-warning]': 'variant === "warning"',
    '[class.flui-alert-danger]': 'variant === "danger"',
  },
  encapsulation: ViewEncapsulation.None,
})
export class FluiAlert {
  @Input() variant: FluiAlertVariants = 'default';
}
