import ImageProduit from "./ImageProduit";
import DescriptionProduit from "./DescriptionProduit";
import { ProduitDuJourProps } from "../types/produit.types";
import { useAnimationStore } from "../services/animationStore";

const ProduitDuJour = ({ produit }: ProduitDuJourProps) => {
  const isDataLoaded = useAnimationStore((state) => state.isDataLoaded);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-40 md:flex-row">
      <div className="flex-col items-center justify-center flex-shrink-0 w-80">
        <div className="mb-8">
          <span className={`inline-block bg-[linear-gradient(90deg,rgba(69,63,58,0)_0%,rgba(69,63,58,0)_5%,rgba(69,63,58,1)_28%,rgba(69,63,58,1)_70%,rgba(69,63,58,0)_95%,rgba(69,63,58,0)_100%)] text-white px-16 py-1  text-xl italic ${
            isDataLoaded
              ? "titre-produit-du-jour animate"
              : "titre-produit-du-jour"
          }`}

          >
            Produit du jour
          </span>
        </div>
        <ImageProduit image={produit.image} nom={produit.nom} />
      </div>
      <div className="flex-1">
        <DescriptionProduit
          nom={produit.nom}
          description={produit.description}
          avis={produit.avis}
          note={produit.note}
          prix={produit.prix}
          ancienPrix={produit.ancienPrix}
          stock={produit.stock}
        />
      </div>
    </div>
  );
};

export default ProduitDuJour;
