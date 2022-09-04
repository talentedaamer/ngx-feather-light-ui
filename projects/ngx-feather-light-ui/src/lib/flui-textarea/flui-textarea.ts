import {Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from "@angular/forms";
import { FluiControlValueAccessor } from "../common/flui-control-value-accessor";

@Component({
  selector: 'flui-textarea',
  templateUrl: './flui-textarea.html',
  styleUrls: ['./flui-textarea.css']
})
export class FluiTextarea extends FluiControlValueAccessor {

  private uniqueIdentifier = `flui-textarea-${Math.random().toString().substring(2, 6)}`;

  @Input() id: string = this.uniqueIdentifier;

  @Input() name: string = this.uniqueIdentifier;

  @Input() label?: string;

  @Input() placeholder?: string;

  @Input() errorMessages: string[] = [];

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

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

  get textareaClasses() {
    let textareaClasses: any = {
      'flui-textarea-wrap': true,
      'flui-disabled': this.disabled,
      'flui-invalid': this.errorState
    }

    return textareaClasses;
  }
}
