import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiSelectboxComponent } from './flui-selectbox.component';

describe('FluiSelectboxComponent', () => {
  let component: FluiSelectboxComponent;
  let fixture: ComponentFixture<FluiSelectboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiSelectboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
