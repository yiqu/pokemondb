import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PokemonShell, PokemonShellFavorite } from 'src/app/shared/models/pokmeon.model';
import { calculateParams, ITEMS_PER_PAGE, Pagination } from 'src/app/shared/models/rest.model';
import * as fromPokemonShellActions from './pokemon.actions';


export interface FavoritePokemonShellEntityState extends EntityState<PokemonShellFavorite> {
  apiWorking: boolean;
  error: boolean;
  errMsg: string;
}

export function selectId(pokemon: PokemonShellFavorite) {
  return pokemon.id!;
}

export function comparator(a: PokemonShellFavorite, b: PokemonShellFavorite) {
  if (a.dateFavorited && b.dateFavorited) {
    return a.dateFavorited < b.dateFavorited ? 1 : -1;
  }
  return 1;
}

export const adapter = createEntityAdapter<PokemonShellFavorite>({
  selectId: selectId,
})

export const inititalState = adapter.getInitialState<Partial<FavoritePokemonShellEntityState>>({
  apiWorking: false,
  errMsg: undefined,
  error: false
});


export const favoritePokemonShellEntityReducer = createReducer(
  inititalState,

  on(fromPokemonShellActions.getPokemonFavoriteStart, (state) => {
    return {
      ...state,
      apiWorking: true
    }
  }),

  on(fromPokemonShellActions.getPokemonFavoriteSuccess, (state, { payload }) => {

    return adapter.setAll(payload, {
      ...state,
      apiWorking: false,
      error: false,
      errMsg: undefined,
    })
  }),


  on(fromPokemonShellActions.getPokemonFavoriteFailure, (state, { errMsg }) => {
    return {
      ...state,
      error: true,
      errMsg: errMsg,
      apiWorking: false
    }
  }),

)

export function favoritePokemonShellEntityReducerFunc(state: FavoritePokemonShellEntityState | undefined, action: Action) {
  return favoritePokemonShellEntityReducer(state, action);
}
