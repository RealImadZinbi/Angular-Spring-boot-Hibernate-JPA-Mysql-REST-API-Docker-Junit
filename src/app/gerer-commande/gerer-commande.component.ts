import { element } from 'protractor';
import { InteractionServiceService } from './../Services/interaction-service.service';
import { UpdateProduitComponent } from './../update-produit/update-produit.component';
import { MatTableDataSource } from '@angular/material/table';
import { Commande } from './../commande.model';
import { ProduitsService } from './../Services/produits.service';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit.model';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-gerer-commande',
  templateUrl: './gerer-commande.component.html',
  styleUrls: ['./gerer-commande.component.css']
})
export class GererCommandeComponent implements OnInit {
  data: Subscription;
  Total: any = 0;
  displayedColumns = ['image', 'nom', 'quantite', 'prixUnitaire','MODIFIER','SUPPRIMER'];
  produits: Produit[] = [];
  dataSource = new MatTableDataSource<Produit>(this.produits);

 

  constructor(private produtiService :ProduitsService,
              private dialog: MatDialog,
              private interactionService: InteractionServiceService,
              private produitService: ProduitsService) {

   }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.data = this.produtiService.getProductList().subscribe(
      (produit) => {
        this.produits = produit;
        this.dataSource = new MatTableDataSource<Produit>(this.produits);

        console.log(this.produits);
      }
    )
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(UpdateProduitComponent, dialogConfig);

  }
  sendData(element: any) {
    this.interactionService.sendInfo(element);
   }
   deleteProduct(id: number) {
    this.produitService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
