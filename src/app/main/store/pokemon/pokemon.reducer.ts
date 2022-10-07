import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PokemonShell } from 'src/app/shared/models/pokmeon.model';
import { calculateParams, Pagination } from 'src/app/shared/models/rest.model';
import * as fromPokemonShellActions from './pokemon.actions';

export const ITEMS_PER_PAGE: number = 20;

export interface PokemonShellEntityState extends EntityState<PokemonShell> {
  apiWorking: boolean;
  firstTimeLoading: boolean;
  error: boolean;
  errMsg: string;
  pagination: Pagination;
  lastFetchedDate: number;
}

export function selectId(pokemon: PokemonShell) {
  return pokemon.name;
}

export function comparator(a: PokemonShell, b: PokemonShell) {
  if (a.name && b.name) {
    return a.name < b.name ? 1 : -1;
  }
  return 1;
}

export const adapter = createEntityAdapter<PokemonShell>({
  selectId: selectId,
})

export const inititalState = adapter.getInitialState<Partial<PokemonShellEntityState>>({
  apiWorking: false,
  firstTimeLoading: true,
  errMsg: undefined,
  error: false,
  lastFetchedDate: undefined,
  pagination: {
    limit: ITEMS_PER_PAGE,
    firstOffset: 0
  }
});


export const pokemonShellEntityReducer = createReducer(
  inititalState,

  on(fromPokemonShellActions.getAllPokemonStart, (state, { page, scrollPosition }) => {

    return {
      ...state,
      apiWorking: true,
      pagination: {
        ...state.pagination,
        pageRequested: page
      }
    };
  }),

  on(fromPokemonShellActions.getAllPokemonSuccess, (state, { payload,  fetchedDate }) => {
    const data: PokemonShell[] = payload.results;
    const newPagination = calculateParams(state.pagination!, payload)

    return adapter.setAll(data, {
      ...state,
      apiWorking: false,
      firstTimeLoading: false,
      error: false,
      errMsg: undefined,
      pagination: newPagination,
      lastFetchedDate: fetchedDate
    });
  }),

  on(fromPokemonShellActions.getAllPokemonFailure, (state, { errMsg }) => {
    return {
      ...state,
      apiWorking: false,
      errMsg,
      error: true
    };
  })

)

export function pokemonShellEntityReducerFunc(state: PokemonShellEntityState | undefined, action: Action) {
  return pokemonShellEntityReducer(state, action);
}
