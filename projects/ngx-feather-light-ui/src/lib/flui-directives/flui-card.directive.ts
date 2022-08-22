import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fluiCard]'
})
export class FluiCardDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
