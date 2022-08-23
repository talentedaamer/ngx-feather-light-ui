import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public errorMessages: any = {
    required: 'This Field is Required',
  };

  fakeForm = this._formBuilder.group({
    activeProfile: ['', Validators.requiredTrue ],
    rememberPassword: [''],
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  isBtnClicked($event: any) {
    console.log('>> fakeform value', this.fakeForm.value);
  }

}
