import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDispoComponent } from './produit-dispo.component';

describe('ProduitDispoComponent', () => {
  let component: ProduitDispoComponent;
  let fixture: ComponentFixture<ProduitDispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitDispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
