"use client";

import { useUser } from "@/shared/helpers/useUser";

const WelcomeMessage = () => {
  const user = useUser();

  if (!user) return null;

  return (
    <div className="text-center mb-8">
      <h2 className="w-2/3 h-12 m-auto flex items-center justify-center text-white text-xl leading-[20px] tracking-[-0.02em] bg-[linear-gradient(90deg,rgba(69,63,58,0)_0%,rgba(69,63,58,0)_5%,rgba(69,63,58,1)_28%,rgba(69,63,58,1)_70%,rgba(69,63,58,0)_95%,rgba(69,63,58,0)_100%)]">
        <span className="italic">Bonjour</span>{" "}
        <span className="ml-3 font-serif">{user.pseudo}</span>
        <span className="italic"> , voici notre produit du jour</span>
      </h2>
    </div>
  );
};

export default WelcomeMessage;
