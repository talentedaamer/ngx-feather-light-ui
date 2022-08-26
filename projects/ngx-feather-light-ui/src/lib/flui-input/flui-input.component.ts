import {Component, forwardRef, Input, Optional, Self} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";

const CUI_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FluiInputComponent),
  multi: true
};

@Component({
  selector: 'flui-input',
  templateUrl: './flui-input.component.html',
  styleUrls: ['./flui-input.component.css'],
  providers: [
    // CUI_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class FluiInputComponent extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-control-${new Date().getTime().toString()}`;

  @Input()
  id: string = this.uniqueIdentifier;

  @Input()
  name: string = this.uniqueIdentifier;

  @Input()
  type: string = 'text';

  @Input()
  get label(): string | undefined {
    return this._label;
  }
  set label(label: string | undefined ) {
    this._label = label;
  }
  private _label?: string | undefined;

  @Input()
  get placeholder(): string | undefined {
    return this._placeholder;
  }
  set placeholder(placeholder: string | undefined ) {
    this._placeholder = placeholder;
  }
  private _placeholder?: string | undefined;

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

  get inputClasses() {
    let inputClasses: any = {
      'flui-input-wrap': true,
      'flui-disabled': this.disabled,
      'flui-invalid': this.errorState
    }

    return inputClasses;
  }
}
