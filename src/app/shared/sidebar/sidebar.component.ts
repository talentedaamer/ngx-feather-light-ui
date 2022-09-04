import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navLinks = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
