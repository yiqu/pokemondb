import { createAction, props } from "@ngrx/store";

const GET_ALL_POKEMON_START: string = '[Pokemon All/API] Get all pokemon start';
const GET_ALL_POKEMON_SUCCESS: string = '[Pokemon All/API] Get all pokemon successful';
const GET_ALL_POKEMON_FAILURE: string = '[Pokemon All/API] Get all pokemon failure';


export const getAllPokemonStart = createAction(
  GET_ALL_POKEMON_START,
  props<{limit: number}>()
)

export const getAllPokemonSuccess = createAction(
  GET_ALL_POKEMON_SUCCESS,
  props<{mainTitle: string}>()
)

export const getAllPokemonFailure = createAction(
  GET_ALL_POKEMON_START,
  props<{mainTitle?: string, subTitle?: string[]}>()
)
