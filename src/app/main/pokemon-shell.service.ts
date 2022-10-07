import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonResponse, PokemonShell } from '../shared/models/pokmeon.model';
import { HParams, ITEMS_PER_PAGE, Pagination } from '../shared/models/rest.model';
import { HttpService } from '../shared/services/http.service';
import { AppState } from '../store/global/app.reducer';
import * as fromPokemonShellSelectors from './store/pokemon/pokemon.selectors';
import * as fromPokemonShellActions from './store/pokemon/pokemon.actions';
import { ScrollPosition } from './store/pokemon/pokemon.state';

export const POKEMON_BASE_URL: string = 'https://pokeapi.co/api/v2';
export const POKEMON_SHELL_BASE_URL: string = `${POKEMON_BASE_URL}/pokemon`;

@Injectable({
  providedIn: 'root'
})
export class PokemonShellService {

  public pagination$: Observable<Pagination> = this.store.select(fromPokemonShellSelectors.getPagination);

  constructor(public httpService: HttpService, private store: Store<AppState>) {
  }

  public getPokemonShells(page?: number, url?: string | null): Observable<PokemonResponse<PokemonShell>> {
    let pageParams = new HttpParams();
    let fetchingUrl = POKEMON_SHELL_BASE_URL;
    if (url) {
      fetchingUrl = url;
    } else {
      pageParams = pageParams.set("offset", ((page ?? 0) * ITEMS_PER_PAGE));
      pageParams = pageParams.set("limit", ITEMS_PER_PAGE);
    }
    return this.httpService.get<PokemonResponse<PokemonShell>>(fetchingUrl, pageParams);
  }

  public fetchPokemonShells(page?: number, scrollPosition?: ScrollPosition): void {
    this.store.dispatch(fromPokemonShellActions.getAllPokemonStart({ page: page, scrollPosition: scrollPosition }));
  }

}
