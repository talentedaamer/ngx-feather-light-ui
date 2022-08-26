import {Component, Input, OnInit, Optional, Self} from '@angular/core';
import {NgControl} from "@angular/forms";
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";

@Component({
  selector: 'flui-selectbox',
  templateUrl: './flui-selectbox.component.html',
  styleUrls: ['./flui-selectbox.component.css']
})
export class FluiSelectboxComponent extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-control-${new Date().getTime().toString()}`;

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
  get options(): any[] {
    return this._options;
  }
  set options(options: any[] ) {
    this._options = options;
  }
  private _options: any[] = [];

  @Input()
  errorMessages: string[] = [];

  @Input()
  required: boolean = false;

  @Input()
  disabled: boolean = false;

  public errors: string[] = [];

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  selectboxOptionChange(option: any) {
    console.log('selectboxOptionChange')
    // if (!this.disabled) {
    //   this.checked = value;
    //   this.value = this.checked;
    //   this._onChange(this.checked);
    //   this._onTouched();
    //   this.isRadioChanged.emit(this.checked);
    // }
  }

  override writeValue(value: any) {
    console.log('writeValue')
    super.writeValue(value);
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
    let inputClasses: any = {
      'flui-selectbox-wrap': true,
      'flui-disabled': this.disabled,
      'flui-invalid': this.errorState
    }

    return inputClasses;
  }

}
