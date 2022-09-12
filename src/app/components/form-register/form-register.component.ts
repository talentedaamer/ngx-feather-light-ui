import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public errorMessages: any = {
    invalidUsername: 'Username is not valid. Please enter a valid username.',
    required: 'This field is required',
    minlength: 'Username can not be less than 8 characters',
    maxlength: 'Username can not exceed 20 characters',
  };

  public formLogin = this._formBuilder.group({
    username: ['', customValidationUsername ],
    passwordGroup: this._formBuilder.group({
      password: ['', Validators.required],
      conformPassword: ['', Validators.required]
    }, customPasswordMatcher( 'password', 'confirmPassword', 'passwordMismatch' )),
    remember: [true],
    gender: [''],
    phone: [''],
  });

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {}

  isGenderChanged() {
    console.log('radio clicked');
  }

}

function customValidationUsername( c: AbstractControl ): { [key: string]: boolean } | null {
  if ( c.value !== null && (c.value.length < 8 || c.value?.length > 20 ) ) {
    return { 'invalidUsername': true }
  }

  return null;
}

function customPasswordMatcher( match: string, matchWith: string, errorString: string ): ValidatorFn {
  return ( c: AbstractControl ): { [key: string]: boolean } | null => {
    const matchfield = c.get(match);
    const matchWithField = c.get(matchWith);

    if ( matchfield?.value !== matchWithField?.value ) {
      return { [errorString]: true }
    }

    return null;
  }
}
