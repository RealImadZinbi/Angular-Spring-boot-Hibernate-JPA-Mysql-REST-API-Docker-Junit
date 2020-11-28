import { Produit } from './../produit.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {

  private listSource = new Subject<Produit>();
  private listeSource = new Subject<any>();
  private listSourc = new Subject<any>();
  list$ = this.listSource.asObservable();
  liste$ = this.listeSource.asObservable();
  lis$ = this.listSourc.asObservable();
  constructor() { }

  sendMessage(message :any) {
    this.listSource.next(message);
  }
  sendData(data :any) {
    this.listeSource.next(data);
  }
  sendInfo(data : any) {
    this.listSourc.next(data);
  }
}
