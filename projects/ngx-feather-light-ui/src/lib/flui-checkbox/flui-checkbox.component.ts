import {Component, EventEmitter, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'flui-checkbox',
  templateUrl: './flui-checkbox.component.html',
  styleUrls: ['./flui-checkbox.component.css']
})
export class FluiCheckboxComponent extends FluiControlValueAccessor {

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

  @Input() labelPosition: 'right' | 'left' = 'right';

  @Input() checked: boolean = false;

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output()
  isCheckChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private touched: boolean = false;

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
      this.touched = true;
      this.checked = !this.checked;
      this.value = this.checked;
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
      if (control.errors && this.touched) {
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
