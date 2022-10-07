import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { Action } from '@ngrx/store';
import { PokemonShellService } from '../../pokemon-shell.service';
import * as fromPokemonShellActions from './pokemon.actions';
import { Pagination } from 'src/app/shared/models/rest.model';
import { PokemonResponse, PokemonShell } from 'src/app/shared/models/pokmeon.model';
import { ScrollPosition } from './pokemon.state';

@Injectable()
export class PokemonShellEffects {

  constructor(public actions$: Actions, private ps: PokemonShellService) {
  }

  getPokemonShells$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getAllPokemonStart),
      concatLatestFrom(() => this.ps.pagination$),
      switchMap((res) => {
        let paramsFromState: Pagination = res[1];
        const actionPayload = res[0];

        let fetchUrl: string | undefined | null = undefined;

        // if using scroll position for auto navigating
        if (actionPayload.scrollPosition) {
          if (actionPayload.scrollPosition === ScrollPosition.Next) {
            fetchUrl = paramsFromState.nextPageUrl;
          } else if (actionPayload.scrollPosition === ScrollPosition.Prev) {
            fetchUrl = paramsFromState.previousPageUrl;
          }
        }

        let requestPage = actionPayload.page ?? 0;

        return this.ps.getPokemonShells(requestPage, fetchUrl).pipe(
          map((payload: PokemonResponse<PokemonShell>) => {
            console.log(payload)
            return fromPokemonShellActions.getAllPokemonSuccess({ payload, fetchedDate: new Date().getTime() });
          })
        )
      })
    );
  });

}

export const pokemonShellEffects = [PokemonShellEffects];
