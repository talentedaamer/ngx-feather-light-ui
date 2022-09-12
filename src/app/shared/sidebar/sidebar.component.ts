import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  componentsLinks = [
    {
      link: 'button',
      title: 'Button'
    },
    {
      link: 'input',
      title: 'Input'
    },
    {
      link: 'textarea',
      title: 'Textarea'
    },
    {
      link: 'checkbox',
      title: 'Checkbox'
    },
    {
      link: 'radio',
      title: 'Radio'
    },
    {
      link: 'selectbox',
      title: 'Selectbox'
    },
    {
      link: 'alert',
      title: 'Alert'
    },
    {
      link: 'card',
      title: 'Card'
    }
  ]
  formPagesLinks = [
    {
      link: 'form-login',
      title: 'Form Login'
    },
    {
      link: 'form-register',
      title: 'Form Register'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
