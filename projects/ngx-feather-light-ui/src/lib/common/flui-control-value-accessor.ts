import {ControlValueAccessor} from "@angular/forms";

/**
 * This class should be extended by all common ui controls
 * this will enable them to be recognized by angular forms.
 **/
export class FluiControlValueAccessor implements ControlValueAccessor {

  constructor() {}

  set value(value: any) {
    if (value !== this._value) {
      this._value = value;
      this._onChange(value);
    }
  }
  get value(): any {
    return this._value;
  }
  _value: any;

  protected _onChange: any = () => {};
  protected _onTouched: any = () => {};

  private _isDisabled: boolean = false;

  onBlur() {
    this._onTouched();
  }

  writeValue(value: any): void {
    if (value !== this._value) {
      this._value = value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this._isDisabled = isDisabled;
  }
}
