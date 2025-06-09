import { useQuery } from "@tanstack/react-query";
import { Produit, ProduitDuJourAPI } from "../types/produit.types";
import { useAnimationStore } from "./animationStore";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://gondor-chic-back-end.vercel.app";

const fetchProduitDuJour = async (): Promise<ProduitDuJourAPI> => {
  try {
    const response = await fetch(`${API_URL}/produits/du-jour`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.data) {
      throw new Error("Format de réponse invalide");
    }

    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération du produit du jour:", error);
    throw error;
  }
};

const mapProduitDuJour = (data: ProduitDuJourAPI["data"]): Produit => ({
  nom: data.nom,
  description: data.description,
  avis: 2315, // Valeur statique
  note: 4, // Valeur statique
  prix: data.prix,
  ancienPrix: data.prix * 1.5, // Calcul statique basé sur le prix actuel
  stock: data.qte_en_stock,
  image: data.url_img || "/assets/produit-du-jour.png", // Image par défaut si url_img est vide
});

// Données statiques pour simuler l'API
const produitDuJourStatic: ProduitDuJourAPI = {
  data: {
    id: 3,
    reference: "REF-003",
    nom: "Anneau de Destruction",
    prix: 32,
    description:
      "Forgé dans les ténèbres pour ruiner vos amitiés et vos plans du samedi soir. Un bijou qui vous colle au doigt... et à la peau",
    est_du_jour: true,
    qte_en_stock: 0,
    url_img: "",
  },
};

export const useProduitDuJourStatic = () => {
  const setDataLoaded = useAnimationStore((state) => state.setDataLoaded);

  return useQuery({
    queryKey: ["produitDuJourStatic"],
    queryFn: async () => {
      // Simuler un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = mapProduitDuJour(produitDuJourStatic.data);
      setDataLoaded(true);
      return data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useProduitDuJour = () => {
  const setDataLoaded = useAnimationStore((state) => state.setDataLoaded);

  return useQuery({
    queryKey: ["produitDuJour"],
    queryFn: async () => {
      const response = await fetchProduitDuJour();
      const data = mapProduitDuJour(response.data);
      setDataLoaded(true);
      return data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
