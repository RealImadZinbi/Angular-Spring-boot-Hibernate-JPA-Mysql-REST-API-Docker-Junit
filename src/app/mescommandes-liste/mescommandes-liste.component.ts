import { MatTableDataSource } from '@angular/material/table';
import { Commande } from './../commande.model';
import { PanierServiceService } from './../Services/panier-service.service';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-mescommandes-liste',
  templateUrl: './mescommandes-liste.component.html',
  styleUrls: ['./mescommandes-liste.component.css']
})

export class MescommandesListeComponent implements OnInit,OnDestroy {
 datas :Subscription;
 Total: any = 0;
 displayedColumns = ['image', 'nom', 'quantite', 'prixUnitaire','sousTotal'];
 commandes: Commande[] = [];
 dataSource = new MatTableDataSource<Commande>(this.commandes);

 
  constructor(private panierService: PanierServiceService) { }

  ngOnInit(): void {
    this.datas = this.panierService.getAllCommandes().subscribe((datas) => {
      this.commandes = datas;
      this.dataSource = new MatTableDataSource<Commande>(this.commandes);

      console.log(this.commandes);
      for(let i=0;i<this.commandes.length;i++) {
        this.Total = this.commandes[i].sousTotal + this.Total;
      }

    } )
  }

 ngOnDestroy() :void {
   this.datas.unsubscribe;  
 }
 displayCommandes() {
 }
}

