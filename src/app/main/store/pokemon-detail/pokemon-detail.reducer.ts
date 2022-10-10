import { createAction, Action, on, createReducer } from "@ngrx/store"
import { PokemonDetailState } from "./pokemon-detail.state";
import * as fromPokemonShellActions from '../pokemon/pokemon.actions';
import { Pokemon } from '../../../shared/models/pokmeon.model';

const initialState: PokemonDetailState = {
  apiLoading: false,
  pokemonFetching: null,
  pokemon: undefined,
  error: false
}

export const pokemonDetailReducer = createReducer(
  initialState,

  on(fromPokemonShellActions.getPokemonStart, (state, { pokemonName }) => {

    return {
      ...state,
      pokemonFetching: pokemonName,
      apiLoading: true
    }
  }),

  on(fromPokemonShellActions.getPokemonSuccess, (state, { payload, fetchedDate }) => {

    return {
      ...state,
      apiLoading: false,
      pokemon: payload,
      errMsg: undefined,
      error: false
    }
  }),

  on(fromPokemonShellActions.getPokemonFailure, (state, { errMsg }) => {

    return {
      ...state,
      apiLoading: false,
      errMsg,
      error: true
    }
  })

)
