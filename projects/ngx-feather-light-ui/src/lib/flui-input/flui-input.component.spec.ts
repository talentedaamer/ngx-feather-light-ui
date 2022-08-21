import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiInputComponent } from './flui-input.component';

describe('FluiInputComponent', () => {
  let component: FluiInputComponent;
  let fixture: ComponentFixture<FluiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
