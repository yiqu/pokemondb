export interface NamedApiResource {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
}

export interface PokemonResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface PokemonShell {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  location_area_encounters: string;
  moves: any[];
  species: NamedApiResource;
  stats: any[];
  types: any[];
  sprites: PokemonSprites;
}
