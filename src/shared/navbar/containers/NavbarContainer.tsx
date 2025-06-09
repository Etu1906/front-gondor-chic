"use client";

import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import { useEffect, useState } from "react";

interface NavbarContainerProps {
  className?: string;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ className }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifier au chargement
    checkIfMobile();

    // Ajouter l'écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", checkIfMobile);

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile ? (
    <NavbarMobile className={className} />
  ) : (
    <Navbar className={className} />
  );
};

export default NavbarContainer;
