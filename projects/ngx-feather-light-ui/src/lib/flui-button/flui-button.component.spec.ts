import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiButtonComponent } from './flui-button.component';

describe('FluiButtonComponent', () => {
  let component: FluiButtonComponent;
  let fixture: ComponentFixture<FluiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
