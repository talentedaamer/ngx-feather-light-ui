import { FluiCardDirective } from './flui-card.directive';
import {ElementRef} from "@angular/core";

describe('FluiCardDirective', () => {
  const elementRefMock = {
    nativeElement: document.createElement('div')
  }

  it('should create an instance', () => {
    const directive = new FluiCardDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
