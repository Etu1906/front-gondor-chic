import Image from "next/image";
import { ImageProduitProps } from "../types/produit.types";
import "./ImageProduit.scss";
import { useAnimationStore } from "../services/animationStore";

const ImageProduit = ({ image, nom }: ImageProduitProps) => {
  const isDataLoaded = useAnimationStore((state) => state.isDataLoaded);

  return (
    <div className="transition-transform duration-300 group hover:-translate-y-2">
      <Image
        src={image}
        alt={nom}
        width={300}
        height={200}
        className={`items-center justify-center object-contain h-auto ${
          isDataLoaded ? "image-produit" : ""
        }`}
        priority
      />
    </div>
  );
};

export default ImageProduit;
