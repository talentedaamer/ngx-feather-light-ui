import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[fluiMessage]'
})
export class FluiMessageDirective {

  @HostBinding('class')
  elementClass = 'flui-message';

  constructor(
    private elementRef: ElementRef
  ) {

    // const cardElementStyle = this.elementRef.nativeElement.style;
    // cardElementStyle.backgroundColor = '#f5f5f5';
    // cardElementStyle.borderRadius = '0.25rem';
    // cardElementStyle.padding = '1rem';
    //
    // cardElementStyle.addClass = 'flui-message';
  }

}
