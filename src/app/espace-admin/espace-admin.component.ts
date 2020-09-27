import { Router } from '@angular/router';
import { AjouterProduitComponent } from './../ajouter-produit/ajouter-produit.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/AjouterProduit']);
  }
 
  }
 


