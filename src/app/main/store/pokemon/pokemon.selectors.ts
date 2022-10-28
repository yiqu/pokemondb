import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pagination } from 'src/app/shared/models/rest.model';
import * as fromPokemonShellEntityReducer from './pokemon.reducer';
import { PokemonShellEntityState } from './pokemon.reducer';
import { POKEMON_SHELL_STORE_KEY } from './pokemon.state';

export const pokemonShellFeatureState = createFeatureSelector<PokemonShellEntityState>(POKEMON_SHELL_STORE_KEY);

export const selectIds = createSelector(
  pokemonShellFeatureState,
  fromPokemonShellEntityReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  pokemonShellFeatureState,
  fromPokemonShellEntityReducer.adapter.getSelectors().selectEntities
);

export const selectAll = createSelector(
  pokemonShellFeatureState,
  fromPokemonShellEntityReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  pokemonShellFeatureState,
  fromPokemonShellEntityReducer.adapter.getSelectors().selectTotal
);

export const isFilesFirstTimeLoading = createSelector(
  pokemonShellFeatureState,
  (state): boolean => {
    return state.firstTimeLoading;
  }
);

export const isApiLoading = createSelector(
  pokemonShellFeatureState,
  (state): boolean => {
    return state.apiWorking;
  }
);

export const getPagination = createSelector(
  pokemonShellFeatureState,
  (state): Pagination => {
    return state.pagination;
  }
);

export const getEndReached = createSelector(
  pokemonShellFeatureState,
  (state): boolean => {
    return state.endReached;
  }
);
