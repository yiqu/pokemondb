import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonResponse, PokemonShell } from '../shared/models/pokmeon.model';
import { HParams, Pagination } from '../shared/models/rest.model';
import { HttpService } from '../shared/services/http.service';
import { AppState } from '../store/global/app.reducer';
import * as fromPokemonShellSelectors from './store/pokemon/pokemon.selectors';
import * as fromPokemonShellActions from './store/pokemon/pokemon.actions';

export const POKEMON_BASE_URL: string = 'https://pokeapi.co/api/v2';
export const POKEMON_SHELL_BASE_URL: string = `${POKEMON_BASE_URL}/pokemon`;

@Injectable({
  providedIn: 'root'
})
export class PokemonShellService {

  public pagination$: Observable<Pagination> = this.store.select(fromPokemonShellSelectors.getPagination);

  constructor(public httpService: HttpService, private store: Store<AppState>) {
  }

  public getPokemonShells(params: HParams): Observable<PokemonResponse<PokemonShell>> {
    let pageParams = new HttpParams();
    pageParams = pageParams.set("offset", params.offset);
    pageParams = pageParams.set("limit", params.limit);
    return this.httpService.get<PokemonResponse<PokemonShell>>(POKEMON_SHELL_BASE_URL, pageParams);
  }

  public fetchPokemonShells(pagination?: Pagination): void {
    this.store.dispatch(fromPokemonShellActions.getAllPokemonStart({ pagination }));
  }

}
