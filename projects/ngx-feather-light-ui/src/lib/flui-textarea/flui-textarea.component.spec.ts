import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiTextareaComponent } from './flui-textarea.component';

describe('FluiTextareaComponent', () => {
  let component: FluiTextareaComponent;
  let fixture: ComponentFixture<FluiTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
