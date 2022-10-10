import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError, filter, tap } from 'rxjs';
import { PokemonShellService } from '../../pokemon-shell.service';
import { Pokemon, PokemonResponse, PokemonShell } from 'src/app/shared/models/pokmeon.model';
import { RouterService } from 'src/app/shared/services/router-service';
import * as fromPokemonShellActions from '../pokemon/pokemon.actions';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class PokemonDetailEffects {

  constructor(public actions$: Actions, private ps: PokemonShellService, public rs: RouterService) {
  }


  getPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getPokemonStart),
      switchMap((res) => {
        const pokemonName: string = res.pokemonName;
        return this.ps.getPokemon(pokemonName).pipe(
          map((res) => {
            return fromPokemonShellActions.getPokemonSuccess({ payload: res });
          }),
          catchError((err: HttpErrorResponse) => {
            console.log(err)
            return of(fromPokemonShellActions.getPokemonFailure({ errMsg: (err.error + err.message) }));
          })
        )
      })
    );
  });


}

export const pokemonDetailEffects = [PokemonDetailEffects];
