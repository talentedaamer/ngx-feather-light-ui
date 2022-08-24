import {Component, EventEmitter, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'flui-checkbox',
  templateUrl: './flui-checkbox.component.html',
  styleUrls: ['./flui-checkbox.component.css']
})
export class FluiCheckboxComponent extends FluiControlValueAccessor {

  @Input() id?: string;

  @Input() name?: string = '';

  @Input()
  get label() {
    return this._label;
  }
  set label(label) {
    this._label = label;
  }
  private _label?: string;

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
    let classes: any = {
      'flui-checkbox': true
    }

    if (this.disabled) {
      classes['flui-disabled'] = true;
    }

    if (this.errorState) {
      classes['flui-invalid'] = true;
    }

    return classes;
  }

}
