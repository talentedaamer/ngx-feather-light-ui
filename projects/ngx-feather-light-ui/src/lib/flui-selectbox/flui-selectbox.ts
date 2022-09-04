import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from "@angular/forms";
import { FluiControlValueAccessor } from "../common/flui-control-value-accessor";

@Component({
  selector: 'flui-selectbox',
  templateUrl: './flui-selectbox.html',
  styleUrls: ['./flui-selectbox.css']
})
export class FluiSelectbox extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-select-${Math.random().toString().substring(2, 6)}`;

  @Input() id: string = this.uniqueIdentifier;

  @Input() name: string = this.uniqueIdentifier;

  @Input() label?: string;

  @Input()
  get options(): any[] {
    return this._options;
  }
  set options(options: any[] ) {
    this._options = options;
  }
  private _options: any[] = [];

  @Input() selected: any = null;

  @Input() errorMessages: string[] = [];

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output() isSelectChanged: EventEmitter<any> = new EventEmitter<any>();

  public errors: string[] = [];

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  selectboxOptionChange(event: any) {
    if (!this.disabled) {
      this.selected = event.target.value;
      this.value = this.selected;
      this._onChange(this.selected);
      this._onTouched();
      this.isSelectChanged.emit(this.selected);
    }
  }

  override writeValue(value: any) {
    super.writeValue(value);
    this.selected = this.value;
  }

  get errorState(): boolean {
    this.errors = [];
    if (!this.disabled && this.ngControl ) {
      const control: any = this.ngControl.control
      if (control.errors && control.touched) {
        const controlErrors = Object.keys(control.errors);
        controlErrors.forEach( (e: any) => {
          this.errors.push(this.errorMessages[e]);
        });

        return true;
      }
    }

    return false;
  }

  get selectboxClasses() {
    let selectClasses: any = {
      'flui-selectbox-wrap': true,
      'flui-disabled': this.disabled,
      'flui-invalid': this.errorState
    }

    return selectClasses;
  }

}
