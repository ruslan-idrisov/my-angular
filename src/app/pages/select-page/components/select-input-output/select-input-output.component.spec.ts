import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputOutputComponent } from './select-input-output.component';

describe('SelectInputOutputComponent', () => {
  let component: SelectInputOutputComponent;
  let fixture: ComponentFixture<SelectInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
