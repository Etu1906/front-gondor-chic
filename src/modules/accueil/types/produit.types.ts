export interface Produit {
  nom: string;
  description: string;
  avis: number;
  note: number;
  prix: number;
  ancienPrix: number;
  stock: number;
  image: string;
}

export interface ProduitDuJourProps {
  produit: Produit;
}

export interface ImageProduitProps {
  image: string;
  nom: string;
}

export interface DescriptionProduitProps {
  nom: string;
  description: string;
  avis: number;
  note: number;
  prix: number;
  ancienPrix: number;
  stock: number;
}

export interface ProduitDuJourAPI {
  data: {
    id: number;
    reference: string;
    nom: string;
    prix: number;
    description: string;
    est_du_jour: boolean;
    qte_en_stock: number;
    url_img: string;
  };
}
