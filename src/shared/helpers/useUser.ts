import { jwtDecode } from "jwt-decode";
import { useLoginStore } from "@/modules/connexion/services/loginStore";
import { UserData } from "@/modules/connexion/types/connexion";

type User = Omit<UserData, "mot_de_passe">;

export const useUser = () => {
  const storeUser = useLoginStore((state) => state.user);

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("gondor-chic-token");
    if (token) {
      try {
        const parsedUser = jwtDecode(token);
        console.log("parsed user", parsedUser);
        return parsedUser as UserData ;
      } catch (error) {
        console.error("Erreur lors de la lecture du localStorage:", error);
      }
    }
  }

  return null;
};
