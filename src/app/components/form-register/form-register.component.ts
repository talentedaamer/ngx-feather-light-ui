import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {
  validateUsername,
  validatePasswordMatcher,
} from "../../common/customValidators";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public errorMessages: any = {
    invalidUsername: 'Username is not valid. Please enter a valid username.',
    passwordMisMatch: 'Password does not match, Please enter same password for both fields',
    required: 'This field is required',
    minlength: 'Username can not be less than 8 characters',
    maxlength: 'Username can not exceed 20 characters',
  };

  public formLogin = this._formBuilder.group({
      username: ['', validateUsername ],
      password: ['', Validators.required],
      conformPassword: ['', Validators.required],
      remember: [true],
      gender: [''],
      phone: [''],
    }, {
      validators:[
        validatePasswordMatcher('password','conformPassword','passwordMisMatch'),
      ]
    });

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {}

  isGenderChanged() {
    console.log('radio clicked');
  }

}
