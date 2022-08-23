import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fluiCard]'
})
export class FluiCardDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    let css = `
    background: #ffffff;
    border-radius: .375rem;
    margin-bottom: 1rem;
    padding: 1.5rem;
    box-shadow: 0 0 1em -0.125em rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1)`;
    this.elementRef.nativeElement.setAttribute("style", css);
  }

}


@Directive({
  selector: '[fluiCardHeader]'
})
export class FluiCardHeaderDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    let css = `
    color: #363636;
    margin: 0 0 1.5rem;`;
    this.elementRef.nativeElement.setAttribute("style", css);
  }

}
