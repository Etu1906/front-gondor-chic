export interface LoginCredentials {
  pseudo: string;
  motDePasse: string;
}

export interface UserData {
  id: number;
  nom: string;
  prenom: string;
  numero: string;
  pseudo: string;
  mot_de_passe: string;
}

export interface AuthResponse {
  client: UserData;
  token: string;
}
