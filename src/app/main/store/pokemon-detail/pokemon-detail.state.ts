import { Pokemon, PokemonSpecies } from "src/app/shared/models/pokmeon.model";

export const POKEMON_DETAIL_STORE_KEY = "pokemonDetail";


export interface PokemonDetailState {
  error?: boolean;
  errMsg?: string;
  apiLoading: boolean;
  pokemonFetching?: string | null;
  pokemon?: Pokemon;
  species?: PokemonSpecies;
}
