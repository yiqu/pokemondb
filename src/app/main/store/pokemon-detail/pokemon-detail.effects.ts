import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError, filter, tap } from 'rxjs';
import { PokemonShellService } from '../../pokemon-shell.service';
import { Pokemon, PokemonResponse, PokemonShell } from 'src/app/shared/models/pokmeon.model';
import { RouterService } from 'src/app/shared/services/router-service';
import * as fromPokemonShellActions from '../pokemon/pokemon.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { PokemonSpeciesService } from '../../pokemon-species.service';



@Injectable()
export class PokemonDetailEffects {

  constructor(public actions$: Actions, private ps: PokemonShellService, public rs: RouterService,
    private pss: PokemonSpeciesService) {
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

  getPokemonSpeciesTrigger$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getPokemonSuccess),
      map((res) => {
        const pokemon: Pokemon = res.payload;
        const speciesUrl: string = pokemon.species.url;
        return fromPokemonShellActions.getPokemonSpeciesStart({ url: speciesUrl });
      })
    );
  });

  getPokemonSpecies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getPokemonSpeciesStart),
      switchMap((res) => {
        const url = res.url;
        return this.pss.getSpecies(url).pipe(
          map((species) => {
            return fromPokemonShellActions.getPokemonSpeciesSuccess({ payload: species, fetchedDate: new Date().getTime() });
          })
        );
      })
    );
  });




}

export const pokemonDetailEffects = [PokemonDetailEffects];
