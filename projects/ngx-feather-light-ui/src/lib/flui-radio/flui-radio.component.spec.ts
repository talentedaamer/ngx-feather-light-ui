import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiRadioComponent } from './flui-radio.component';

describe('FluiRadioComponent', () => {
  let component: FluiRadioComponent;
  let fixture: ComponentFixture<FluiRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
