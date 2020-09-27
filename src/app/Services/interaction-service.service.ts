import { Produit } from './../produit.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {

  private listSource = new Subject<Produit>();
  list$ = this.listSource.asObservable();
  constructor() { }

  sendMessage(message :any) {
    this.listSource.next(message);
  }
}
