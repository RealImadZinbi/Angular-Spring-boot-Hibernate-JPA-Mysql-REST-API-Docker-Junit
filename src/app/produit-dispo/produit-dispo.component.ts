import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProduitsService } from './../Services/produits.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produit } from '../monpanier/monpanier.component';

@Component({
  selector: 'app-produit-dispo',
  templateUrl: './produit-dispo.component.html',
  styleUrls: ['./produit-dispo.component.css']
})
export class ProduitDispoComponent implements OnDestroy,OnInit {
  produits$: Observable<Produit>;
  data: Subscription;
  constructor(private produitService :ProduitsService,
              private router: Router) { }

  ngOnInit(): void {
    this.data = this.produitService.getProductList().subscribe(
      (produits) => {
        console.log(produits);
        this.produits$ = produits;
      }
    )

  }
  ngOnDestroy(): void {
    this.data.unsubscribe;
  }

  voir(id : number) {
    this.router.navigate(['detailProduit', id]);
  }
}
