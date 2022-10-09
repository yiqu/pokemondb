import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { MenuOption } from 'src/app/shared/models/drop-menu.model';
import { PokemonShell } from 'src/app/shared/models/pokmeon.model';
import { calculateParams, Pagination } from 'src/app/shared/models/rest.model';
import * as fromActionbarActions from './action-bar.actions';


export interface ActionBarEntityState extends EntityState<MenuOption> {
  apiWorking: boolean;
}

export function selectId(actionBtn: MenuOption) {
  return actionBtn.id;
}

export const adapter = createEntityAdapter<MenuOption>({
  selectId: selectId,
})

export const inititalState = adapter.getInitialState<Partial<ActionBarEntityState>>({
  apiWorking: false
});


export const actionbarEntityReducer = createReducer(
  inititalState,

  on(fromActionbarActions.setActions, (state, { actions }) => {

    return adapter.setAll(actions, {
      ...state
    })
  }),

)

export function pokemonShellEntityReducerFunc(state: ActionBarEntityState | undefined, action: Action) {
  return actionbarEntityReducer(state, action);
}
