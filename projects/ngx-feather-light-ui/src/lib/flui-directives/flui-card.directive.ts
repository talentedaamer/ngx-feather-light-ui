import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fluiCard]'
})
export class FluiCardDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    const cardElementStyle = this.elementRef.nativeElement.style;
    cardElementStyle.backgroundColor = '#ffffff';
    cardElementStyle.borderRadius = '.25rem'
    cardElementStyle.marginBottom = '1rem';
    cardElementStyle.padding = '1rem';
    cardElementStyle.boxShadow = '0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02)';
  }

}
