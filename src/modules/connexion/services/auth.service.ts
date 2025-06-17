import { LoginCredentials, UserData, AuthResponse } from "../types/connexion";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://gondor-chic-back-end.vercel.app";

export const loginUser = async (
  credentials: LoginCredentials
): Promise<{ user: UserData; token: string }> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data: AuthResponse = await response.json();

    console.log("data ", data);
    return {
      user: data.client,
      token: data.token,
    };
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    throw error;
  }
};
