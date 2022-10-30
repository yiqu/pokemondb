import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Pagination } from 'src/app/shared/models/rest.model';
import { FavoritePokemonShellEntityState } from './pokemon-favorite.reducer';
import * as fromFavoritePokemonShellEntityReducer from './pokemon-favorite.reducer';
import { FAVORITE_POKEMON_SHELL_STORE_KEY, POKEMON_SHELL_STORE_KEY } from './pokemon.state';

export const favoritePokemonShellFeatureState = createFeatureSelector<FavoritePokemonShellEntityState>(FAVORITE_POKEMON_SHELL_STORE_KEY);

export const selectIds = createSelector(
  favoritePokemonShellFeatureState,
  fromFavoritePokemonShellEntityReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  favoritePokemonShellFeatureState,
  fromFavoritePokemonShellEntityReducer.adapter.getSelectors().selectEntities
);

export const selectAll = createSelector(
  favoritePokemonShellFeatureState,
  fromFavoritePokemonShellEntityReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  favoritePokemonShellFeatureState,
  fromFavoritePokemonShellEntityReducer.adapter.getSelectors().selectTotal
);


export const isApiLoading = createSelector(
  favoritePokemonShellFeatureState,
  (state): boolean => {
    return state.apiWorking;
  }
);