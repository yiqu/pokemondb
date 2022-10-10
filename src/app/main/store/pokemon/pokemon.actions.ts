import { createAction, props } from "@ngrx/store";
import { Pokemon, PokemonResponse, PokemonShell } from "src/app/shared/models/pokmeon.model";
import { Pagination } from "src/app/shared/models/rest.model";
import { ScrollPosition } from "./pokemon.state";

const GET_ALL_POKEMON_START: string = '[Pokemon All/API] Get all pokemon start';
const GET_ALL_POKEMON_SUCCESS: string = '[Pokemon All/API] Get all pokemon successful';
const GET_ALL_POKEMON_FAILURE: string = '[Pokemon All/API] Get all pokemon failure';


const GET_POKEMON_START: string = '[Pokemon/API] Get a pokemon start';
const GET_OKEMON_SUCCESS: string = '[Pokemon/API] Get a pokemon successful';
const GET_POKEMON_FAILURE: string = '[Pokemon/API] Get a pokemon failure';


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
