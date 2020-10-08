import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-monpanier',
  templateUrl: './monpanier.component.html',
  styleUrls: ['./monpanier.component.css']
})
export class MonpanierComponent implements AfterViewInit,OnInit {
  total: number;
  produits: any[];
  Datas:Produit[]
  quantite = 200;
  quantites: number[] = [200,300,400];
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Produit>(this.Datas);
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    if(localStorage) {
      this.produits = JSON.parse(localStorage.getItem('produitCard'));
      console.log(this.produits);
      console.log(this.produits[0].nomProduit);
      
      this.Datas = [
        {image: this.produits[0].image ,
           nom: this.produits[0].nomProduit,
            quantite: this.produits[0].quantite,
          prixUnitaire: this.produits[0].prixUnitaire,
           sousTotal: this.produits[0].sousTotal},
      ];
      this.displayedColumns = ['image', 'nom', 'quantite', 'prixUnitaire','sousTotal'];
     this.dataSource = new MatTableDataSource<Produit>(this.Datas);
    }
   
  }
  
  Total(i) {
    for(let i =0; this.Datas.length ; i++) {
       this.total = this.Datas[i].quantite*this.Datas[i].prixUnitaire;
    }
    return this.total;

  }
}
export interface Produit {
  nom: string;
  quantite: number;
  prixUnitaire: number;
  image: string;
  sousTotal: string;
}

 



