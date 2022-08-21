import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiInputPreviewComponent } from './flui-input-preview.component';

describe('FluiInputPreviewComponent', () => {
  let component: FluiInputPreviewComponent;
  let fixture: ComponentFixture<FluiInputPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiInputPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiInputPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
