import { InteractionServiceService } from './../Services/interaction-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProduitsService } from './../Services/produits.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  id: number;
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
    private interactionService: InteractionServiceService) {
      this.interactionService.lis$.subscribe( (produit) => {
        this.produit = produit; })
        console.log(this.produit);
     }

  ngOnInit(): void {
   
    }
  
  updateProduct() {
    this.produitService.updateProduct(this.produit.id, this.produit)
      .subscribe(data => {
        console.log(data);
        this.produit = new Produit();
      }, error => console.log(error));
  }


  onSubmit() {
    this.updateProduct();
  }

}
