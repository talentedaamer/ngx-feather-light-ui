import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  public errorMessages: any = {
    required: 'This Field is Required',
  };

  fakeForm = this._formBuilder.group({
    activeProfile: ['', Validators.requiredTrue ],
    rememberPassword: [true],
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
