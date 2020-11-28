import { MesCommandesComponent } from './../mes-commandes/mes-commandes.component';
import { PanierServiceService } from './../Services/panier-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DataSource } from '@angular/cdk/table';
import { TokenStorageServiceService } from '../Services/token-storage-service.service';

@Component({
  selector: 'app-monpanier',
  templateUrl: './monpanier.component.html',
  styleUrls: ['./monpanier.component.css']
})
export class MonpanierComponent implements AfterViewInit,OnInit {
  total: any = 0;
  produits: any[];
  Datas:any[] = [];
  quantites: number[] = [200,300,400];
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Produit>(this.Datas);
  currentUser: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private panierService :PanierServiceService,
                private dialog: MatDialog,
                private token: TokenStorageServiceService)
                {

    }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
       this.getPanierProduit();
       this.currentUser = this.token.getUser();
     
    }
  
    async getPanierProduit() {
      const promise1 = new Promise((resolve,reject)=>
      {
        resolve(this.produits = JSON.parse(localStorage.getItem('produitCard')));
      })
       await promise1;
      for(let i=0;i<this.produits.length;i++) {
        let  produitChoisis = {
          image : this.produits[i].image,
          nomProduit    :this.produits[i].nomProduit,
          quantite : this.produits[i].quantite,
          prixUnitaire : this.produits[i].prixUnitaire,
          sousTotal : this.produits[i].sousTotal,
          username : this.produits[i].username
        }
        this.total = produitChoisis.sousTotal + this.total;
        this.Datas.push(produitChoisis);
        this.displayedColumns = ['image', 'nom', 'quantite', 'prixUnitaire','sousTotal'];
        this.dataSource = new MatTableDataSource<Produit>(this.Datas);
      }
    }
  viderPanier() {
    localStorage.clear();
    window.location.reload();
  }
  ajouterCommande() {
    for(let i=0;i<this.Datas.length;i++) {
    this.panierService.addCommande((this.Datas[i])).subscribe((datas) => {
      console.log(datas);
    }
  ) 
    localStorage.clear();
  }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(MesCommandesComponent, dialogConfig);

  } 
  
}
export interface Produit {
  nom: string;
  quantite: number;
  prixUnitaire: number;
  image: string;
  sousTotal:  any;
}

 



