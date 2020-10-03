import { InteractionServiceService } from './../Services/interaction-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ajouter-au-panier',
  templateUrl: './ajouter-au-panier.component.html',
  styleUrls: ['./ajouter-au-panier.component.css']
})
export class AjouterAuPanierComponent implements OnInit,OnDestroy {
 message: any;
 data: Subscription;
  constructor(private interactionService: InteractionServiceService) {
     this.data = this.interactionService.liste$.subscribe({
       next: (message) => {
      this.message = message
       }
     }
     )
     
   }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.data.unsubscribe;
  }
}
