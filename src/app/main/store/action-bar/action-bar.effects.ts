import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { Action } from '@ngrx/store';
import { PokemonShellService } from '../../pokemon-shell.service';
import { Pagination } from 'src/app/shared/models/rest.model';
import * as fromActionbarActions from './action-bar.actions';
import { MenuOption } from 'src/app/shared/models/drop-menu.model';

const DEFAULT_ACTIONS: MenuOption[] = [{
  display: 'Refresh',
  id: 'refresh',
  disabled: false,
  icon: 'refresh'
}]


@Injectable()
export class AllPokemonActionsEffects implements OnInitEffects {

  constructor(public actions$: Actions, private ps: PokemonShellService) {
  }

  ngrxOnInitEffects(): Action {
    return fromActionbarActions.setActions({ actions: DEFAULT_ACTIONS });
  }


}

export const allPokemonActionsEffects = [AllPokemonActionsEffects];
