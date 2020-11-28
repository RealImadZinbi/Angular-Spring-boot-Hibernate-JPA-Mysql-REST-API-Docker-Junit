import { Observable } from 'rxjs';
import { Produit } from './../produit.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/Commandes';


  constructor(private http: HttpClient) { }

  addCommande(produitCommandes: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,produitCommandes);
  }
  getAllCommandes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
