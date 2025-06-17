import React, { useState } from "react";
import Image from "next/image";
import { useLoginStore } from "../services/loginStore";
import { useLogin } from "@/shared/helpers/Uselogin";

const LoginForm = () => {
  const [pseudo, setPseudo] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const { mutate: login, isPending } = useLogin();
  const closeLoginModal = useLoginStore((state) => state.closeLoginModal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
    login(
      { pseudo, motDePasse },
      {
        onSuccess: () => {
          closeLoginModal();
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col items-center gap-6 p-5"
    >
      <Image
        src="/assets/svg/top-left.svg"
        alt="Décoration coin supérieur gauche"
        className="absolute -top-4 -left-4"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/assets/svg/top-right.svg"
        alt="Décoration coin supérieur droit"
        className="absolute z-0 -top-4 -right-4"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/assets/svg/bottom-left.svg"
        alt="Décoration coin inférieur gauche"
        className="absolute -bottom-4 -left-4"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/assets/svg/bottom-right.svg"
        alt="Décoration coin inférieur droit"
        className="absolute -bottom-4 -right-4"
        width={35}
        height={35}
        priority
      />
      <h2 className="mb-4 font-serif text-5xl">CONNEXION</h2>
      <p className="text-xs text-extralight mb-6 max-w-lg italic leading-[20px] tracking-[-0.02em font-light">
        Entrez par les portes blanches de{" "}
        <span className="font-bold">Minas Tirith</span>. Toutes vos données
        seront protégées par les runes de cryptage forgées par les maîtres{" "}
        <span className="font-bold"> nains de la Moria</span>.
      </p>

      <div className="w-full mb-4">
        <label
          htmlFor="pseudo"
          className="block mb-2 text-sm italic text-left text-gray-300 text-primary"
        >
          Saisissez votre identifiant magique
        </label>
        <input
          type="text"
          id="pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="w-full p-3 text-white bg-black border-2 rounded-md border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="motDePasse"
          className="block mb-2 text-sm italic text-left text-gray-300 text-primary"
        >
          Saisissez votre parole de passage
        </label>
        <input
          type="password"
          id="motDePasse"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          className="w-full p-3 text-white bg-black border-2 rounded-md border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 text-lg font-semibold text-white transition duration-200 border rounded-md border-[#454440] hover:bg-primary hover:text-black disabled:opacity-50"
      >
        {isPending ? "Connexion en cours..." : "Continuer"}
      </button>

      <p className="mt-6 text-xs italic font-light">
        Un sort vous empêche de franchir le seuil ?{" "}
        <a href="#" className="underline text-primary">
          Demandez l'aide du Conseil Blanc.
        </a>
      </p>

      <p className="mt-8 text-xs italic font-light">
        En foulant ce chemin, vous jurez fidélité à nos{" "}
        <a href="#" className="underline text-primary">
          Conditions d'utilisation
        </a>{" "}
        gravées dans les livres de la Tour Blanche, et vous reconnaissez avoir
        consulté la{" "}
        <a href="#" className="underline text-primary">
          Politique de confidentialité
        </a>{" "}
        conservée dans les Archives d'Imladris.
      </p>
    </form>
  );
};

export default LoginForm;
