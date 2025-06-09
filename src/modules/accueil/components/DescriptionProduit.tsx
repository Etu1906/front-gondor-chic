import Image from "next/image";
import "./DescriptionProduit.scss";
import { useLoginStore } from "@/modules/connexion/services/loginStore";
import { DescriptionProduitProps } from "../types/produit.types";
import { useAnimationStore } from "../services/animationStore";
import { formatGondariar } from "@/shared/helpers/numberHelper";

const DescriptionProduit = ({
  nom,
  description,
  avis,
  note,
  prix,
  ancienPrix,
  stock,
}: DescriptionProduitProps) => {
  const openLoginModal = useLoginStore((state) => state.openLoginModal);
  const isDataLoaded = useAnimationStore((state) => state.isDataLoaded);

  return (
    <div
      className={`flex flex-col gap-9 ${
        isDataLoaded ? "description-produit" : ""
      }`}
    >
      <h2 className="font-serif text-5xl leading-tight">{nom}</h2>
      <p className="max-w-2xl italic text-sm leading-[20px] tracking-[-0.02em]">
        {description}
      </p>
      <div className="flex items-center gap-2 text-lg">
        <span className="text-secondary">{"★".repeat(note)}</span>
        <span className="text-sm italic font-bold text-text">{avis} avis</span>
      </div>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-center gap-1 text-2xl font-bold">
          <Image
            src="/assets/svg/promotion.svg"
            alt="Promotion"
            width={173}
            height={46}
            priority
          />
          <div className="flex items-center gap-2">
            <svg
              width="19"
              height="33"
              viewBox="0 0 19 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9.5V23.5L9.5 33L0 23.5V9.5L9.5 0L19 9.5ZM3 11.0762V22.2275L9.5 28.5L16 22.2275V11.0762L9.5 4.5L3 11.0762ZM14 12.5V20.5L9.5 25L5 20.5V12.5L9.5 8L14 12.5Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-base italic text-text">
              {formatGondariar(prix)}
            </span>
          </div>
        </div>
        <span className="pb-2 text-sm italic line-through text-text">
          {formatGondariar(ancienPrix)}
        </span>
      </div>
      <span className="italic font-bold text-red">
        Plus que {stock} en stocks
      </span>
      <div className="flex items-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/svg/-.svg"
            alt="Diminuer"
            width={19}
            height={44}
          />
          <span className="px-4 py-1 border rounded bg-[#453F3A]/75 min-h-11 text-lg font-semibold w-16 flex items-center justify-center text-primary border-radius-3 italic">
            1
          </span>
          <Image
            src="/assets/svg/+.svg"
            alt="Augmenter"
            width={19}
            height={44}
          />
        </div>
        <button className="add-to-cart" onClick={openLoginModal}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default DescriptionProduit;
