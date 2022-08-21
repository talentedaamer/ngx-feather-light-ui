import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'flui-button',
  templateUrl: './flui-button.component.html',
  styleUrls: ['./flui-button.component.css']
})
export class FluiButtonComponent {

  @Input()
  variant: 'base' | 'outline' | 'link' = 'base';

  @Input()
  type: 'primary' | 'success' | 'danger' = 'primary';

  @Input()
  get text(): string | undefined {
    return this._text;
  }
  set text(value: string | undefined ) {
    this._text = value;
  }
  private _text?: string | undefined;

  @Input()
  disabled: boolean = false;

  @Output()
  isClicked: EventEmitter<any> = new EventEmitter<any>();

  isButtonClicked($event: any) {
    this.isClicked.emit($event);
  }

  get fluiButtonClasses(): any {
    let buttonClasses: any = {
      'flui-button': true,
      [`flui-button-variant-${this.variant}`]: true,
      [`flui-button-type-${this.type}`]: true,
    };

    if (this.disabled) {
      buttonClasses['flui-disabled'] = true;
    }

    return buttonClasses;
  }

}
