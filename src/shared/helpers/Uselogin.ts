import { loginUser } from "@/modules/connexion/services/auth.service";
import { useLoginStore } from "@/modules/connexion/services/loginStore";
import { useMutation } from "@tanstack/react-query";
import { UserData } from "@/modules/connexion/types/connexion";

type User = Omit<UserData, "mot_de_passe">;

export const useLogin = () => {
  const setUser = useLoginStore((state) => state.setUser);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { user, token } = data;
      const { mot_de_passe, ...userData } = user;
      setUser(userData);
      localStorage.setItem("gondor-chic-token", token);
    },
  });
};
