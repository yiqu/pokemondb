import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionBarEntityState } from './action-bar.reducer';
import { ACTION_BAR_STORE_KEY } from './action-bar.state';
import * as fromAllPokemonActionsReducer from './action-bar.reducer';


export const allPokemonActionsFeatureState = createFeatureSelector<ActionBarEntityState>(ACTION_BAR_STORE_KEY);

export const selectIds = createSelector(
  allPokemonActionsFeatureState,
  fromAllPokemonActionsReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  allPokemonActionsFeatureState,
  fromAllPokemonActionsReducer.adapter.getSelectors().selectEntities
);

export const selectAll = createSelector(
  allPokemonActionsFeatureState,
  fromAllPokemonActionsReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  allPokemonActionsFeatureState,
  fromAllPokemonActionsReducer.adapter.getSelectors().selectTotal
);