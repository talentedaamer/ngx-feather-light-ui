import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public errorMessages: any = {
    pattern: 'Enter a valid username',
    required: 'This field is required',
    minlength: 'Username can not be less than 8 characters',
    maxlength: 'Username can not exceed 20 characters',
  };

  public formLogin = this._formBuilder.group({
    username: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]],
    password: [''],
    remember: [true],
    gender: [''],
    phone: [''],
  });

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin.get('password')?.setValidators(Validators.required);

    this.formLogin.valueChanges.subscribe( value => {
      console.log('>> value', value);
      if ( value.username === 'aaa') {
        const username = this.formLogin.get('remember');
        const password = this.formLogin.get('password')
        password?.setValue('password', {emitEvent: false});
        // password?.clearValidators();
        // password?.setErrors(null);
        // not working, fix it
        // password?.disable({emitEvent: false, onlySelf: true });
      }
    });
  }

  isGenderChanged() {
    console.log('radio clicked');
    
  }

}
