import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { FluiControlValueAccessor } from "../common/flui-control-value-accessor";
import { NgControl } from "@angular/forms";
import { FluiLabelPosition } from "../common/flui-types";

@Component({
  selector: 'flui-radio',
  templateUrl: './flui-radio.html',
  styleUrls: ['./flui-radio.css'],
})
export class FluiRadio extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-radio-${Math.random().toString().substring(2, 6)}`;

  @Input() id: string = this.uniqueIdentifier;

  @Input() name: string | undefined;

  @Input() label?: string;

  @Input() radioValue?: any;

  @Input() labelPosition: FluiLabelPosition = 'right';

  @Input() checked: boolean = false;

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output() isRadioChanged: EventEmitter<any> = new EventEmitter<any>();

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
      this._onChange(this.checked);
      this._onTouched();
      this.isRadioChanged.emit(this.checked);
    }
  }

  override writeValue(value: any) {
    super.writeValue(value);
    this.checked = this.value;
  }

  get radioButtonClasses() {
    let radioClasses: any = {
      'flui-radio': true,
      [`flui-radio-label-${this.labelPosition}`]: true,
      'flui-disabled': this.disabled
    }

    return radioClasses;
  }
}
