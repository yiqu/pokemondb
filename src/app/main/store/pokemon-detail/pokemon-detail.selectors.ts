import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokmeon.model';
import { PokemonDetailState, POKEMON_DETAIL_STORE_KEY } from './pokemon-detail.state';

export const selectPokemonDetailFeatureState = createFeatureSelector<PokemonDetailState>(POKEMON_DETAIL_STORE_KEY);

export const isApiLoading = createSelector(
  selectPokemonDetailFeatureState,
  (state): boolean => {
    return state.apiLoading;
  }
);

export const getSelectedPokemon = createSelector(
  selectPokemonDetailFeatureState,
  (state): Pokemon | undefined => {
    return state.pokemon;
  }
);
