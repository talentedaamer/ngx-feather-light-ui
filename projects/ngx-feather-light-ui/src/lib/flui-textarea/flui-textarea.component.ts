import {Component, ElementRef, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";
import {NgControl} from "@angular/forms";

@Component({
  selector: 'flui-textarea',
  templateUrl: './flui-textarea.component.html',
  styleUrls: ['./flui-textarea.component.css']
})
export class FluiTextareaComponent extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-control-${new Date().getTime().toString()}`;

  @Input()
  id: string = this.uniqueIdentifier;

  @Input()
  name: string = this.uniqueIdentifier;

  @Input()
  get label() {
    return this._label;
  }
  set label(label: string | undefined ) {
    this._label = label;
  }
  private _label?: string | undefined;

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

  get textareaClasses() {
    let classes: any = {
      'flui-textarea-wrap': true
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
