import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';
import {
  FluiCardVariants,
  FluiCardActionsAlignment,
} from "../common/flui-types";

/**
 * flui card
 */
@Component({
  selector: 'flui-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['flui-card.css'],
  host: {
    'class': 'flui-card',
    '[class.flui-card-dark]': 'variant === "dark"',
    '[class.flui-card-light]': 'variant === "light"',
    '[class.flui-card-danger]': 'variant === "danger"',
    '[class.flui-card-primary]': 'variant === "primary"',
    '[class.flui-card-success]': 'variant === "success"',
  },
  exportAs: 'fluiCard',
  encapsulation: ViewEncapsulation.None,
})
export class FluiCard {
  @Input() variant: FluiCardVariants = 'default';
}

/**
 * flui card header
 */
@Component({
  selector: 'flui-card-header',
  templateUrl: 'flui-card-header.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'flui-card-header'
  },
})
export class FluiCardHeader {}

/**
 * flui card title directive
 */
@Directive({
  selector: `flui-card-title, [flui-card-title], [fluiCardTitle]`,
  host: {
    'class': 'flui-card-title'
  },
})
export class FluiCardTitle {}

/**
 * flui card content directive
 */
@Directive({
  selector: `flui-card-content, [flui-card-content], [fluiCardContent]`,
  host: {
    'class': 'flui-card-content'
  },
})
export class FluiCardContent {}

/**
 * flui card action
 */
@Directive({
  selector: `flui-card-actions, [flui-card-actions]`,
  host: {
    'class': 'flui-card-actions',
    '[class.flui-card-actions-align-start]': 'contentAlign === "start"',
    '[class.flui-card-actions-align-center]': 'contentAlign === "center"',
    '[class.flui-card-actions-align-end]': 'contentAlign === "end"',
  },
})
export class FluiCardActions {
  @Input() contentAlign: FluiCardActionsAlignment = 'start';
}

/**
 * flui card footer
 */
@Directive({
  selector: 'flui-card-footer',
  host: {
    'class': 'flui-card-footer'
  },
})
export class FluiCardFooter {}
