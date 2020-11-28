import { InteractionServiceService } from './../Services/interaction-service.service';
import { AjouterAuPanierComponent } from './../ajouter-au-panier/ajouter-au-panier.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProduitsService } from './../Services/produits.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Produit } from '../produit.model';
import { TokenStorageServiceService } from '../Services/token-storage-service.service';

@Component({
  selector: 'app-voir-produit',
  templateUrl: './voir-produit.component.html',
  styleUrls: ['./voir-produit.component.css']
})
export class VoirProduitComponent implements OnDestroy, OnInit {

  constructor(private produitService: ProduitsService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private interactionService: InteractionServiceService,
              private token : TokenStorageServiceService) { }
  id: number;            
  produit: Produit;
  data: Subscription;
  quantite: number = 0;
  prixTotal: number = 0;
  message: any;
  quantiteInitiale: number = 0;
  produitCard = [];
  ngOnInit(): void {
    this.produit = new Produit();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.data = this.produitService.getProduct(this.id).subscribe((produit) => {
      console.log(produit);
      this.produit = produit;
       this.quantiteInitiale = this.produit.quantite;
      console.log('initial quantity:',this.quantiteInitiale)
    }, error => console.log(error)); 
  }
  
  async plus() {
    if (this.quantite < this.produit.quantite || this.produit.quantite > 0) {
      
     const promise1 = new Promise((resolve,reject) => {
       resolve(
        this.adjustPlus());
     })
     let prixTotal = await promise1;
     this.prixTotal = this.quantite*this.produit.prixUnitaire;
     this.produit.sousTotal = this.prixTotal;
     this.message = {
       quantite: this.quantite,
       prixTotal: this.prixTotal,
       nomProduit: this.produit.nomProduit,
       username: this.token.getUser().username

     };
  }
}
  async minus() {
   
      if(this.quantite > 0) {
      const promise2 = new Promise((resolve,reject) => {
        resolve(this.adjustMinus());
        reject("Vous ne pouvez pas choisir une quantité négative")
      
      })
    
      let prixTotal = await promise2;
      this.prixTotal = this.quantite*this.produit.prixUnitaire;
      this.message = {
        quantite: this.quantite,
        prixTotal: this.prixTotal,
        nomProduit: this.produit.nomProduit,
        username: this.token.getUser().username
      };

    }
   

  }
  
  acheterProduit() {
    if (localStorage.getItem('produitCard') !== null) {
    this.produitCard = JSON.parse(localStorage.getItem('produitCard'));
    }
    this.produit.quantite = this.quantiteInitiale - this.produit.quantite; 
    this.produitCard.push((this.produit));

    localStorage.setItem('produitCard',JSON.stringify(this.produitCard));
    console.log("session data :",localStorage.getItem('produitCard'));
    
    }
  adjustPlus() {
    this.quantite++;
    this.produit.quantite--;
  }
  adjustMinus() {
    this.quantite--;
    this.produit.quantite++;
  }
   
  ngOnDestroy():void {
    this.data.unsubscribe;
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(AjouterAuPanierComponent, dialogConfig);

  }
  sendData() {
    this.interactionService.sendData(this.message);
    console.log(this.message);
  }
  
}
