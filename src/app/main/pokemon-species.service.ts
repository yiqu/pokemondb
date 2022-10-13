import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonSpecies } from '../shared/models/pokmeon.model';
import { HttpService } from '../shared/services/http.service';
import { AppState } from '../store/global/app.reducer';
import * as fromPokemonDetailSelectors from './store/pokemon-detail/pokemon-detail.selectors';


@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  public pokemonSpecies$: Observable<PokemonSpecies | undefined> = this.store.select(fromPokemonDetailSelectors.getSelectedPokemonSpecies);

  constructor(private store: Store<AppState>, public httpService: HttpService,) {
  }

  public getSpecies(url: string): Observable<PokemonSpecies> {
    return this.httpService.get<PokemonSpecies>(url);
  }

}
