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

  @Input() id?: string;

  @Input() name?: string = '';

  @Input() type: string = 'text';

  @Input()
  get label() {
    return this._label;
  }
  set label(label) {
    this._label = label;
  }
  private _label?: string;

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(placeholder) {
    this._placeholder = placeholder;
  }
  private _placeholder?: string;

  @Input() errorMessages = [];

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  public errors = [];

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
    if (this.disabled !== true && this.ngControl ) {
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
    let classes: any = {
      'flui-input-wrap': true
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
