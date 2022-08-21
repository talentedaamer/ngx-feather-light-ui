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

  @Input()
  checked: boolean = false;

  @Input()
  labelPosition: 'before' | 'after' = 'after';

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output()
  isCheckChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  checkboxSelectionChange() {
    this.checked = !this.checked;
    this.value = this.checked;
    this.isCheckChanged.emit(this.checked);
  }

  override writeValue(value: any) {
    super.writeValue(value);
    this.checked = this.value;
  }

  get checkboxClasses() {
    let classes: any = {
      'flui-checkbox-wrap': true
    }

    if (this.disabled) {
      classes['flui-disabled'] = true;
    }

    return classes;
  }

}
