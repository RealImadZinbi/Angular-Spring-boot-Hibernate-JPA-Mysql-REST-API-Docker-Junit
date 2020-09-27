import { Produit } from './../produit.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private baseUrl = 'http://localhost:8080/api/v1/produits';

  constructor(private http: HttpClient) { }

  getProduct(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addProduct(produit: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,produit);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text' });
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
