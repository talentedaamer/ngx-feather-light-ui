import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FluiControlValueAccessor} from "../common/flui-control-value-accessor";

@Component({
  selector: 'flui-radio',
  templateUrl: './flui-radio.component.html',
  styleUrls: ['./flui-radio.component.css']
})
export class FluiRadioComponent extends FluiControlValueAccessor {

  @Input()
  get radioList(): any[] {
    return this._radioList;
  }
  set radioList(list: any[] ) {
    this._radioList = list;
  }
  private _radioList: any[] = [];

  @Input() display: 'inline' | 'vertical' = 'inline';

  @Input() selected: string | undefined;

  @Input() required: boolean = false;

  @Input() disabled: boolean = false;

  @Output()
  isRadioChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  override writeValue(value: any) {
    super.writeValue(value);
    this.selected = value;
  }
}
