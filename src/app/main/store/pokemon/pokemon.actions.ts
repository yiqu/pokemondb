import { createAction, props } from "@ngrx/store";
import { Pokemon, PokemonResponse, PokemonShell, PokemonShellFavorite, PokemonSpecies } from "src/app/shared/models/pokmeon.model";
import { Pagination } from "src/app/shared/models/rest.model";
import { ScrollPosition } from "./pokemon.state";

const GET_ALL_POKEMON_START: string = '[Pokemon All/API] Get all pokemon start';
const GET_ALL_POKEMON_SUCCESS: string = '[Pokemon All/API] Get all pokemon successful';
const GET_ALL_POKEMON_FAILURE: string = '[Pokemon All/API] Get all pokemon failure';

const GET_POKEMON_RESET: string = '[Pokemon/UI] Reset pokemon detail prop';
const GET_POKEMON_START: string = '[Pokemon/API] Get a pokemon start';
const GET_OKEMON_SUCCESS: string = '[Pokemon/API] Get a pokemon successful';
const GET_POKEMON_FAILURE: string = '[Pokemon/API] Get a pokemon failure';

const GET_POKEMON_SPECIES_START: string = '[Pokemon/API] Get a pokemon species start';
const GET_POKEMON_SPECIES_SUCCESS: string = '[Pokemon/API] Get a pokemon species successful';
const GET_POKEMON_SPECIES_FAILURE: string = '[Pokemon/API] Get a pokemon species failure';

const POKEMON_FAVORITE_START: string = '[Pokemon/API] Set pokemon as favorite start';
const POKEMON_FAVORITE_SUCCESS: string = '[Pokemon/API] Set pokemon as favorite successful';
const POKEMON_FAVORITE_FAILURE: string = '[Pokemon/API] Set pokemon as favorite failure';

const GET_POKEMON_FAVORITE_START: string = '[Pokemon/API] Get pokemon favorites start';
const GET_POKEMON_FAVORITE_SUCCESS: string = '[Pokemon/API] Get pokemon favorites successful';
const GET_POKEMON_FAVORITE_FAILURE: string = '[Pokemon/API] Get pokemon favorites failure';

export const getAllPokemonStart = createAction(
  GET_ALL_POKEMON_START,
  props<{page?: number, scrollPosition?: ScrollPosition}>()
)

export const getAllPokemonSuccess = createAction(
  GET_ALL_POKEMON_SUCCESS,
  props<{payload: PokemonResponse<PokemonShell>, fetchedDate: number}>()
)

export const getAllPokemonFailure = createAction(
  GET_ALL_POKEMON_FAILURE,
  props<{errMsg: string}>()
)

export const getPokemonReset = createAction(
  GET_POKEMON_RESET
)

export const getPokemonStart = createAction(
  GET_POKEMON_START,
  props<{pokemonName: string}>()
)

export const getPokemonSuccess = createAction(
  GET_OKEMON_SUCCESS,
  props<{payload: Pokemon, fetchedDate?: number}>()
)

export const getPokemonFailure = createAction(
  GET_POKEMON_FAILURE,
  props<{errMsg: string}>()
)

export const getPokemonSpeciesStart = createAction(
  GET_POKEMON_SPECIES_START,
  props<{url: string}>()
)

export const getPokemonSpeciesSuccess = createAction(
  GET_POKEMON_SPECIES_SUCCESS,
  props<{payload: PokemonSpecies, fetchedDate?: number}>()
)

export const getPokemonSpeciesFailure = createAction(
  GET_POKEMON_SPECIES_FAILURE,
  props<{errMsg: string}>()
)

export const pokemonFavoriteStart = createAction(
  POKEMON_FAVORITE_START,
  props<{pokemon: PokemonShell}>()
)

export const pokemonFavoriteSuccess = createAction(
  POKEMON_FAVORITE_SUCCESS,
  props<{payload: any, fetchedDate?: number}>()
)

export const pokemonFavoriteFailure = createAction(
  POKEMON_FAVORITE_FAILURE,
  props<{errMsg: string}>()
)

export const getPokemonFavoriteStart = createAction(
  GET_POKEMON_FAVORITE_START
)

export const getPokemonFavoriteSuccess = createAction(
  GET_POKEMON_FAVORITE_SUCCESS,
  props<{payload: PokemonShellFavorite[], fetchedDate?: number}>()
)

export const getPokemonFavoriteFailure = createAction(
  GET_POKEMON_FAVORITE_FAILURE,
  props<{errMsg: string}>()
)