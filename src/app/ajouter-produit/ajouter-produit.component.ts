import { SuccessAddComponent } from './../success-add/success-add.component';
import { InteractionServiceService } from './../Services/interaction-service.service';
import { ProduitsService } from './../Services/produits.service';
import { Produit } from './../produit.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  produit: Produit = new Produit();
  submitted: boolean = false;
  selected : string = "Pompe";
 public categorieProduits : string[] = ["Pompe","Injecteurs","Vannes",
                                "Régulateures","Filtres","Tuyau",
                                "Gaine","Arroseur","Goutte à goutte",
                                "Autres équipements d'irrigation"];
    productForm = this.fb.group({
      nomProduit: ['',Validators.required],
      description: ['',Validators.required],
      prixUnitaire: ['',Validators.required],
      quantite: ['',Validators.required],
      categorie: ['',Validators.required],
      image: ['',Validators.required]

    })
  constructor(private fb :FormBuilder,
              private produitService :ProduitsService,
              private dialog: MatDialog,
              private interactionService :InteractionServiceService) { }

  ngOnInit(): void {
  }
  
  save() {
    this.produitService.addProduct(this.produit).subscribe(data => {
      console.log(data)
      this.produit = new Produit();
    },
    error => console.log(error));
  }
  
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop=true;
    dialogConfig.disableClose=false;

    this.dialog.open(SuccessAddComponent, dialogConfig);

  }
  
  sendData(produit: Produit) {
    console.log(produit);
    this.interactionService.sendMessage(produit);
  }
}
