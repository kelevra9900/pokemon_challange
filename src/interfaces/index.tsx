export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface User {
  user: UserClass;
  access_token: string;
}

export interface UserClass {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUser(json: string): User {
    return JSON.parse(json);
  }

  public static userToJson(value: User): string {
    return JSON.stringify(value);
  }
}

// To parse this data:
//
//   import { Convert, PokemonsResponse } from "./file";
//
//   const pokemonsResponse = Convert.toPokemonsResponse(json);

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  image: string;
  name: string;
  detailsUrl: string;
}

// Converts JSON strings to/from your types
export class ConvertPokemon {
  public static toPokemonsResponse(json: string): PokemonsResponse {
    return JSON.parse(json);
  }

  public static pokemonsResponseToJson(value: PokemonsResponse): string {
    return JSON.stringify(value);
  }
}
