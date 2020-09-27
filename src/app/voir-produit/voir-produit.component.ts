import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProduitsService } from './../Services/produits.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-voir-produit',
  templateUrl: './voir-produit.component.html',
  styleUrls: ['./voir-produit.component.css']
})
export class VoirProduitComponent implements OnDestroy, OnInit {

  constructor(private produitService: ProduitsService,
              private router: Router,
              private route: ActivatedRoute) { }
  id: number;            
  produit: Produit;
  data: Subscription;
  ngOnInit(): void {
    this.produit = new Produit();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.data = this.produitService.getProduct(this.id).subscribe((produit) => {
      console.log(produit);
      this.produit = produit;
    }, error => console.log(error)); 
  }

  ngOnDestroy():void {
    this.data.unsubscribe;
  }

}
