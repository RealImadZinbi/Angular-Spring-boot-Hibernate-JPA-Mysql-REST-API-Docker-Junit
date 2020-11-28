import { Produit } from './produit.model';
export class Commande {
    id: number;
    image: string;
    nom: string;
    quantite: number;
    prixUnitaire: number;
    sousTotal: number;
}
