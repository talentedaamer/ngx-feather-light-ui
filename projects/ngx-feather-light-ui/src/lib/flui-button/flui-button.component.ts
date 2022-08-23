import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'flui-button',
  templateUrl: './flui-button.component.html',
  styleUrls: ['./flui-button.component.css']
})
export class FluiButtonComponent {

  @Input()
  variant: 'primary' | 'light' | 'dark' | 'success' | 'danger' | 'link' | '' = '';

  @Input()
  rounded: boolean = false;

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
    };

    if (this.variant !== '') {
      buttonClasses[`flui-button-variant-${this.variant}`] = true
    }

    if (this.disabled) {
      buttonClasses['flui-disabled'] = true;
    }

    if (this.rounded) {
      buttonClasses['flui-rounded'] = true;
    }

    return buttonClasses;
  }

}
