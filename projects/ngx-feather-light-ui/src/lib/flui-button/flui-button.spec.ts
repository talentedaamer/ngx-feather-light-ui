import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiButton } from './flui-button';

describe('FluiButton', () => {
  let component: FluiButton;
  let fixture: ComponentFixture<FluiButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiButton ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
