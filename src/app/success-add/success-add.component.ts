import { Produit } from './../produit.model';
import { InteractionServiceService } from './../Services/interaction-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-add',
  templateUrl: './success-add.component.html',
  styleUrls: ['./success-add.component.css']
})
export class SuccessAddComponent implements OnInit {
  produit: Produit;
  constructor(private interactionService: InteractionServiceService) {
     this.interactionService.list$.subscribe( (produit) => {
     this.produit = produit; })
   }

  ngOnInit(): void {
  }

}
