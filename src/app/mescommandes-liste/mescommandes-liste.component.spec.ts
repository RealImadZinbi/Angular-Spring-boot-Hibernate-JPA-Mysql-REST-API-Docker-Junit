import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MescommandesListeComponent } from './mescommandes-liste.component';

describe('MescommandesListeComponent', () => {
  let component: MescommandesListeComponent;
  let fixture: ComponentFixture<MescommandesListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MescommandesListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MescommandesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
