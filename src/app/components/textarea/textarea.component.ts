import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  public errorMessages: any = {
    required: 'This Field is Required',
    minLength: 'Min Lengh of 30 Character is Required'
  };

  fakeForm = this._formBuilder.group({
    aboutUser: ['', Validators.required ],
    userBio: ['' ],
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
