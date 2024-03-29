import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError, filter, tap, delay } from 'rxjs';
import { Action } from '@ngrx/store';
import { PokemonShellService } from '../../pokemon-shell.service';
import * as fromPokemonShellActions from './pokemon.actions';
import { Pagination } from 'src/app/shared/models/rest.model';
import { PokemonResponse, PokemonShell, PokemonShellFavorite } from 'src/app/shared/models/pokmeon.model';
import { ScrollPosition } from './pokemon.state';
import { RouterService } from 'src/app/shared/services/router-service';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class PokemonShellEffects implements OnInitEffects {

  ngrxOnInitEffects(): Action {
    return fromPokemonShellActions.getAllPokemonStart({ page: 0 });
  }

  constructor(public actions$: Actions, private ps: PokemonShellService, public rs: RouterService) {
  }

  getPokemonShells$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getAllPokemonStart),
      concatLatestFrom(() => this.ps.pagination$),
      filter((res) => {
        const paramsFromState: Pagination = res[1];
        const actionPayload = res[0];
        const requestPage = actionPayload.page;
        if (requestPage !== undefined || paramsFromState.nextPageUrl) {
          return true;
        }
        return false; // need to return action to success TODO
      }),
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
          delay(0),
          map((payload: PokemonResponse<PokemonShell>) => {
            const dataWithIdAdded = payload.results.map((poke: PokemonShell) => {
              const pokeUrl = poke.url;
              const urlSegments = pokeUrl.split("/");
              const pokeId = urlSegments[urlSegments.length - 2];
              return {
                ...poke,
                pokemonId: pokeId
              }
            });
            const resultData = {
              ...payload,
              results: dataWithIdAdded
            }
            return fromPokemonShellActions.getAllPokemonSuccess({ payload: resultData, fetchedDate: new Date().getTime() });
          }),
          catchError((err) => {
            return of(fromPokemonShellActions.getAllPokemonFailure({ errMsg: err }));
          }),
        )
      })
    );
  });

  dispatchGetFavoritePokemonShells$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromPokemonShellActions.getAllPokemonSuccess, fromPokemonShellActions.pokemonFavoriteSuccess]),
      map(() => {
        return fromPokemonShellActions.getPokemonFavoriteStart();
      })
    );
  });

  setPokemonShellAsFavorite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.pokemonFavoriteStart),
      mergeMap((res) => {
        const pokemon = res.pokemon;
        return this.ps.setPokemonFavorite(pokemon).operationObs.then(
          (res) => {
            return fromPokemonShellActions.pokemonFavoriteSuccess({ payload: res, fetchedDate: new Date().getTime() });
          }
        ).catch((err) => {
          return fromPokemonShellActions.pokemonFavoriteFailure({ errMsg: err });
        })
      })
    );
  });

  getFavoritePokemonShells$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPokemonShellActions.getPokemonFavoriteStart),
      switchMap((res) => {
        return this.ps.getPokemonFavorites().pipe(
          map((pokemons: PokemonShellFavorite[]) => {
            return fromPokemonShellActions.getPokemonFavoriteSuccess({ payload: pokemons });
          }),
          catchError((err) => {
            return of(fromPokemonShellActions.getPokemonFavoriteFailure({ errMsg : err }));
          })
        )
      })
    );
  });

  getPokemonFromRouteParams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.routeParams$),
      filter((res) => {
        const pokemonName: string = res[1]['pokemonName'];
        return !!pokemonName;
      }),
      map((data) => {
        return data[1]['pokemonName'];
      }),
      map((pokemonName: string) => {
        return fromPokemonShellActions.getPokemonStart({ pokemonName });
      })
    );
  });



}

export const pokemonShellEffects = [PokemonShellEffects];
