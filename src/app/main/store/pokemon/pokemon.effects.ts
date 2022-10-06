import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { Action } from '@ngrx/store';
import { PokemonShellService } from '../../pokemon-shell.service';
import * as fromPokemonShellActions from './pokemon.actions';
import { Pagination } from 'src/app/shared/models/rest.model';
import { PokemonResponse, PokemonShell } from 'src/app/shared/models/pokmeon.model';

@Injectable()
export class PokemonShellEffects {

  constructor(public actions$: Actions, private ps: PokemonShellService) {
  }

  getPokemonShells$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getAllPokemonStart),
      concatLatestFrom(() => this.ps.pagination$),
      switchMap((res) => {

        // if user submitted params, use it. Or just use the next set of calculated params
        const inputParams = res[0];
        console.log(inputParams?.pagination)
        const params: Pagination = res[1];

        return this.ps.getPokemonShells(params).pipe(
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
