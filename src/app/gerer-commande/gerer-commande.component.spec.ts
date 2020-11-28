import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererCommandeComponent } from './gerer-commande.component';

describe('GererCommandeComponent', () => {
  let component: GererCommandeComponent;
  let fixture: ComponentFixture<GererCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
