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
export class MonpanierComponent implements AfterViewInit {
  total: number;
  Datas: Produit[] = [
    {image: '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', nom: 'Hydrogen', quantite: 200, prixUnitaire: 130, sousTotal: '600 Dhs'},
    {image: 'https://www.iconfinder.com/data/icons/e-commerce-line-4-1/1024-512.png', nom: 'Chloroc', quantite: 300, prixUnitaire: 115, sousTotal: '700 Dhs'},
    {image: 'https://www.iconfinder.com/data/icons/e-commerce-line-4-1/10open_box4-512.png', nom: 'Hydrogen', quantite: 400, prixUnitaire: 120, sousTotal: '900 Dhs'},
  ];
  quantite = 200;
  quantites: number[] = [200,300,400];
  displayedColumns: string[] = ['image', 'nom', 'quantite', 'prixUnitaire','sousTotal'];
  dataSource = new MatTableDataSource<Produit>(this.Datas);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
 



