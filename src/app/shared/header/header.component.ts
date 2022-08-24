import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";
import {filter, map, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
