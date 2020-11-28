import { TokenStorageServiceService } from './Services/token-storage-service.service';
import { authInterceptorProviders } from './_helpers/auth_interceptor';
import { SuccessAddComponent } from './success-add/success-add.component';
import { InteractionServiceService } from './Services/interaction-service.service';
import { ProduitsService } from './Services/produits.service';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import {MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MonpanierComponent } from './monpanier/monpanier.component';
import { ProduitDispoComponent } from './produit-dispo/produit-dispo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { VoirProduitComponent } from './voir-produit/voir-produit.component';
import { AjouterAuPanierComponent } from './ajouter-au-panier/ajouter-au-panier.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { MescommandesListeComponent } from './mescommandes-liste/mescommandes-liste.component';
import { GererCommandeComponent } from './gerer-commande/gerer-commande.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    SignupComponent,
    SigninComponent,
    MonpanierComponent,
    ProduitDispoComponent,
    EspaceAdminComponent,
    AjouterProduitComponent,
    SuccessAddComponent,
    VoirProduitComponent,
    AjouterAuPanierComponent,
    MesCommandesComponent,
    MescommandesListeComponent,
    GererCommandeComponent,
    UpdateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    

  ],
  providers: [ProduitsService,
            InteractionServiceService,
            TokenStorageServiceService,
            authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
