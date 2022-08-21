import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiCheckboxComponent } from './flui-checkbox.component';

describe('FluiCheckboxComponent', () => {
  let component: FluiCheckboxComponent;
  let fixture: ComponentFixture<FluiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
