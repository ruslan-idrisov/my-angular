import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumperWrapperComponent } from './jumper-wrapper.component';

describe('JumperWrapperComponent', () => {
  let component: JumperWrapperComponent;
  let fixture: ComponentFixture<JumperWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumperWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumperWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
