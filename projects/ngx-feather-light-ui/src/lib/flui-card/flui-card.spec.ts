import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluiCardComponent } from './flui-card.component';

describe('FluiCardComponent', () => {
  let component: FluiCardComponent;
  let fixture: ComponentFixture<FluiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
