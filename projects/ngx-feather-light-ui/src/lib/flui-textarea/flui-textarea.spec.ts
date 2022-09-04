import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiTextarea } from './flui-textarea.component';

describe('FluiTextareaComponent', () => {
  let component: FluiTextarea;
  let fixture: ComponentFixture<FluiTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiTextarea ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
