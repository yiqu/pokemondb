export interface NamedApiResource {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  other: any;
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
  pokemonId?: string;
  isFavorite?: boolean;
}

export interface PokemonShellFavorite {
  name: string;
  url: string;
  pokemonId?: string;
  id?: string;
  dateFavorited: number;
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

export interface NameUrl {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  capture_rate: number;
  color: NameUrl;
  flavor_text_entries: FlavorTextEntry[];
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: NameUrl;
  version: NameUrl;
}
