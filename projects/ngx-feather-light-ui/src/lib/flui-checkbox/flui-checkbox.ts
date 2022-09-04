import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { FluiControlValueAccessor } from "../common/flui-control-value-accessor";
import { NgControl } from "@angular/forms";
import {FluiLabelPosition} from "../common/flui-types";

@Component({
  selector: 'flui-checkbox',
  templateUrl: './flui-checkbox.html',
  styleUrls: ['./flui-checkbox.css']
})
export class FluiCheckbox extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-checkbox-${Math.random().toString().substring(2, 6)}`;

  @Input() id: string = this.uniqueIdentifier;

  @Input() name: string = this.uniqueIdentifier;

  @Input() label?: string;

  @Input() labelPosition: FluiLabelPosition = 'right';

  @Input() checked: boolean = false;

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output() isCheckChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  checkboxSelectionChange() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.value = this.checked;
      this._onChange(this.checked);
      this._onTouched();
      this.isCheckChanged.emit(this.checked);
    }
  }

  override writeValue(value: any) {
    super.writeValue(value);
    this.checked = this.value;
  }

  get errorState(): boolean {
    if (!this.disabled && this.ngControl ) {
      const control: any = this.ngControl.control
      if (control.errors && control.touched) {
        return true;
      }
    }

    return false;
  }

  get checkboxClasses() {
    let checkboxClasses: any = {
      'flui-checkbox': true,
      [`flui-checkbox-label-${this.labelPosition}`]: true,
      'flui-disabled': this.disabled,
      'flui-invalid': this.errorState
    }

    return checkboxClasses;
  }

}
