import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiRadio } from './flui-radio';

describe('FluiRadio', () => {
  let component: FluiRadio;
  let fixture: ComponentFixture<FluiRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiRadio ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiRadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
