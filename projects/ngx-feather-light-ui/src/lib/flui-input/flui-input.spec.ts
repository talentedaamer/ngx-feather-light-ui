import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluiInput } from './flui-input';

describe('FluiInput', () => {
  let component: FluiInput;
  let fixture: ComponentFixture<FluiInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluiInput ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluiInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
