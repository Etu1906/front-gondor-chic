import Image from "next/image";
import "./AccueilBackground.scss";
import { useAnimationStore } from "../services/animationStore";

const AccueilBackground = () => {
  const isDataLoaded = useAnimationStore((state) => state.isDataLoaded);

  return (
    <>
      <Image
        src="/assets/carte.png"
        alt="Carte de la Terre du Milieu"
        className={`carte absolute z-0 right-0 top-0 w-auto h-[100vh] ${
          isDataLoaded ? "animate" : ""
        }`}
        width={900}
        height={1000}
        priority
      />
      <Image
        src="/assets/svg/layer-blur-ellips.svg"
        alt="Ellipse floue centrale"
        className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={500}
        height={582}
        priority
      />
    </>
  );
};

export default AccueilBackground;
