import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluiCheckbox } from './flui-checkbox';

describe('FluiCheckbox', () => {
  let component: FluiCheckbox;
  let fixture: ComponentFixture<FluiCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiCheckbox ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
