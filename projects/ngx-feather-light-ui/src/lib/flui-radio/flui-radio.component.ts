import {Component, EventEmitter, Input, Optional, Output, Self} from '@angular/core';
import { FluiControlValueAccessor } from "../common/flui-control-value-accessor";
import { NgControl } from "@angular/forms";

@Component({
  selector: 'flui-radio',
  templateUrl: './flui-radio.component.html',
  styleUrls: ['./flui-radio.component.css'],
})
export class FluiRadioComponent extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-radio-${Math.random().toString().substring(2, 6)}`;

  @Input()
  id: string = this.uniqueIdentifier;

  @Input()
  name: string | undefined;

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
  isRadioChanged: EventEmitter<any> = new EventEmitter<any>();

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
