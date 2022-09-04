import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiAlert } from './flui-alert';

describe('FluiAlert', () => {
  let component: FluiAlert;
  let fixture: ComponentFixture<FluiAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiAlert ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
