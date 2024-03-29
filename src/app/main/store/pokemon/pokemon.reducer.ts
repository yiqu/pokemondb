import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PokemonShell, PokemonShellFavorite } from 'src/app/shared/models/pokmeon.model';
import { calculateParams, ITEMS_PER_PAGE, Pagination } from 'src/app/shared/models/rest.model';
import * as fromPokemonShellActions from './pokemon.actions';

export interface PokemonShellEntityState extends EntityState<PokemonShell> {
  apiWorking: boolean;
  firstTimeLoading: boolean;
  error: boolean;
  errMsg: string;
  pagination: Pagination;
  lastFetchedDate: number;
  endReached: boolean;
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
  },
  endReached: false
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
    const newPagination = calculateParams(state.pagination!, payload);

    return adapter.addMany(data, {
      ...state,
      apiWorking: false,
      firstTimeLoading: false,
      error: false,
      errMsg: undefined,
      pagination: newPagination,
      lastFetchedDate: fetchedDate,
      endReached: !payload.next
    });
  }),

  on(fromPokemonShellActions.getAllPokemonFailure, (state, { errMsg }) => {
    return {
      ...state,
      apiWorking: false,
      errMsg,
      error: true
    };
  }),

  on(fromPokemonShellActions.getPokemonFavoriteSuccess, (state, { payload }) => {
    console.log(payload)
    let updates: Update<PokemonShell>[] = [];
    payload.forEach((fav: PokemonShellFavorite) => {
      updates.push({
        id: fav.name,
        changes: {
          isFavorite: true
        }
      });
    });
    return adapter.updateMany(updates, {
      ...state
    })
  })

  

)

export function pokemonShellEntityReducerFunc(state: PokemonShellEntityState | undefined, action: Action) {
  return pokemonShellEntityReducer(state, action);
}
