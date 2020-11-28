import { ProfileComponent } from './profile/profile.component';
import { GererCommandeComponent } from './gerer-commande/gerer-commande.component';
import { MescommandesListeComponent } from './mescommandes-liste/mescommandes-liste.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { VoirProduitComponent } from './voir-produit/voir-produit.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ProduitDispoComponent } from './produit-dispo/produit-dispo.component';
import { MonpanierComponent } from './monpanier/monpanier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'Monpanier',component : MonpanierComponent},
  { path:'Produits',component : ProduitDispoComponent},
  { path:'AjouterProduit',component: AjouterProduitComponent},
  { path:'EspaceAdmin',component: EspaceAdminComponent},
  { path:'detailProduit/:id',component: VoirProduitComponent},
  { path:'MesAchats', component: MescommandesListeComponent},
  { path:'GestionCommande', component: GererCommandeComponent},
  { path:'Profile', component: ProfileComponent},

  { path:'',  component:  SidenavComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
