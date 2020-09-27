import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddComponent } from './success-add.component';

describe('SuccessAddComponent', () => {
  let component: SuccessAddComponent;
  let fixture: ComponentFixture<SuccessAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
