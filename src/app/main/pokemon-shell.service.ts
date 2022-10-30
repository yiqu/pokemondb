import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { Pokemon, PokemonResponse, PokemonShell, PokemonShellFavorite, PokemonSpecies } from '../shared/models/pokmeon.model';
import { HParams, ITEMS_PER_PAGE, Pagination } from '../shared/models/rest.model';
import { HttpService } from '../shared/services/http.service';
import { AppState } from '../store/global/app.reducer';
import * as fromPokemonShellSelectors from './store/pokemon/pokemon.selectors';
import * as fromPokemonShellActions from './store/pokemon/pokemon.actions';
import { ScrollPosition } from './store/pokemon/pokemon.state';
import * as fromPokemonActionsSelectors from './store/action-bar/action-bar.selectors';
import { MenuOption } from '../shared/models/drop-menu.model';
import * as fromPokemonDetailSelectors from './store/pokemon-detail/pokemon-detail.selectors';
import * as fromFavoritePokemonShellSelectors from './store/pokemon/pokemon-favorite.selectors';
import { RestService } from '../shared/services/rest.service';
import { FirebaseDocObsAndId } from '../shared/models/general.model';

export const POKEMON_BASE_URL: string = 'https://pokeapi.co/api/v2';
export const POKEMON_SHELL_BASE_URL: string = `${POKEMON_BASE_URL}/pokemon`;

@Injectable({
  providedIn: 'root'
})
export class PokemonShellService {

  public pagination$: Observable<Pagination> = this.store.select(fromPokemonShellSelectors.getPagination);
  public actionBarActions$: Observable<MenuOption[]> = this.store.select(fromPokemonActionsSelectors.selectAll);
  public pokemonList$: Observable<PokemonShell[]> = this.store.select(fromPokemonShellSelectors.selectAll);
  public pokemonListLoading$: Observable<boolean> = this.store.select(fromPokemonShellSelectors.isApiLoading);
  public pokemonListFirstLoading$: Observable<boolean> = this.store.select(fromPokemonShellSelectors.isFilesFirstTimeLoading);
  public allPaginationData$: Observable<Pagination> = this.store.select(fromPokemonShellSelectors.getPagination);
  public pokemonDetailLoading$: Observable<boolean> = this.store.select(fromPokemonDetailSelectors.isApiLoading);
  public selectedPokemon$: Observable<Pokemon | undefined> = this.store.select(fromPokemonDetailSelectors.getSelectedPokemon);
  public pokemonListEndReached$: Observable<boolean> = this.store.select(fromPokemonShellSelectors.getEndReached);
  public pokemonListWithFavorite$: Observable<PokemonShell[]> = this.store.select(fromPokemonShellSelectors.getAllPokemonWithFavorited);


  constructor(public httpService: HttpService, private store: Store<AppState>, public rs: RestService) {
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

  public getPokemon(pokemonName: string): Observable<Pokemon> {
    const url = `${POKEMON_SHELL_BASE_URL}/${pokemonName}`;
    return this.httpService.get<Pokemon>(url).pipe();
  }

  public setPokemonFavorite(pokemon: PokemonShell): FirebaseDocObsAndId {
    const user = 'test-user';
    const withDate: PokemonShellFavorite = {
      ...pokemon,
      dateFavorited: new Date().getTime()
    }
    return this.rs.addDocumentToCollection<PokemonShellFavorite>(withDate, user + '/favorite-pokemon-shells');
  }

  public getPokemonFavorites(): Observable<PokemonShellFavorite[]> {
    const user = 'test-user/';
    const url = user + "favorite-pokemon-shells";
    return this.rs.getCollection<PokemonShellFavorite>(url);
  }

  public fetchPokemonShells(page?: number, scrollPosition?: ScrollPosition): void {
    this.store.dispatch(fromPokemonShellActions.getAllPokemonStart({ page: page, scrollPosition: scrollPosition }));
  }

  public resetPokemonDetailProp(): void {
    this.store.dispatch(fromPokemonShellActions.getPokemonReset());
  }

  public pokemonFavorite(pokemon: PokemonShell) {
    this.store.dispatch(fromPokemonShellActions.pokemonFavoriteStart({ pokemon: pokemon }));
  }

  public fetchPokemonFavorites() {
    this.store.dispatch(fromPokemonShellActions.getPokemonFavoriteStart());
  }




}
