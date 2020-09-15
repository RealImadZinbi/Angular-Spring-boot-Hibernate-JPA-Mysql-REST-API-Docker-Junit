import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonpanierComponent } from './monpanier.component';

describe('MonpanierComponent', () => {
  let component: MonpanierComponent;
  let fixture: ComponentFixture<MonpanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonpanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
