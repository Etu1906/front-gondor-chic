import ProduitDuJour from "../components/ProduitDuJour";
import Image from "next/image";
import { useProduitDuJour } from "../services/produitDuJour.service";
import LoadingMessage from "@/shared/components/LoadingMessage";
import ErrorMessage from "@/shared/components/ErrorMessage";
import { useAnimationStore } from "../services/animationStore";
import "../components/ProduitDuJour.scss";

const AccueilContainer = () => {
  const { data: produit, isLoading, error } = useProduitDuJour();
  const isDataLoaded = useAnimationStore((state) => state.isDataLoaded);

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <main className="relative flex flex-col items-center min-h-screen overflow-hidden">
      <Image
        src="/assets/svg/flower.svg"
        alt="Décoration fleur"
        className={`absolute z-10 -bottom-36 -left-20 ${
          isDataLoaded ? "fleur-decoration animate" : "fleur-decoration"
        }`}
        width={300}
        height={300}
        priority
      />

      <section className="relative z-20 w-full max-w-6xl px-4 mx-auto py-14">
        {produit && <ProduitDuJour produit={produit} />}
      </section>
    </main>
  );
};

export default AccueilContainer;
