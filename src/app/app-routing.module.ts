import { ProduitDispoComponent } from './produit-dispo/produit-dispo.component';
import { MonpanierComponent } from './monpanier/monpanier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'Monpanier',component : MonpanierComponent},
  { path:'Produits',component : ProduitDispoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
