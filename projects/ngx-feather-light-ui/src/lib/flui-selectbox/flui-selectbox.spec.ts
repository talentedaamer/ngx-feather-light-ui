import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluiSelectbox } from './flui-selectbox';

describe('FluiSelectbox', () => {
  let component: FluiSelectbox;
  let fixture: ComponentFixture<FluiSelectbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiSelectbox ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiSelectbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
