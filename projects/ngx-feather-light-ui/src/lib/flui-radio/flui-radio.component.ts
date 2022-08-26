import {Component, EventEmitter, forwardRef, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";
import {NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

export const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FluiRadioComponent),
  multi: true,
};

@Component({
  selector: 'flui-radio',
  templateUrl: './flui-radio.component.html',
  styleUrls: ['./flui-radio.component.css'],
  providers: [
    // RADIO_VALUE_ACCESSOR
  ]
})
export class FluiRadioComponent extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-checkbox-${new Date().getTime().toString()}`;

  @Input()
  id: string = this.uniqueIdentifier;

  @Input()
  name: string = this.uniqueIdentifier;

  @Input()
  get label(): string | undefined {
    return this._label;
  }
  set label(label: string | undefined ) {
    this._label = label;
  }
  private _label?: string | undefined;

  @Input()
  radioValue?: any;

  @Input() labelPosition: 'right' | 'left' = 'right';

  @Input() checked: boolean = false;

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output()
  isRadioChanged: EventEmitter<any> = new EventEmitter<boolean>();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  radioSelectionChange(value: any) {
    if (!this.disabled) {
      this.checked = value;
      this.value = this.checked;
      this.isRadioChanged.emit(this.checked);
    }
  }

  override writeValue(value: any) {
    console.log('write val')
    super.writeValue(value);
    this.checked = this.value;
  }


  get radioButtonClasses() {
    let checkboxClasses: any = {
      'flui-radio-button': true,
      [`flui-radio-button-${this.labelPosition}`]: true,
      'flui-disabled': this.disabled
    }

    return checkboxClasses;
  }
}
