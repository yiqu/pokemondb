import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
import { PokemonShellService } from 'src/app/main/pokemon-shell.service';
import { AppState } from 'src/app/store/global/app.reducer';
import { scrollToElementById } from '../../general.utils';
import { Pokemon } from '../../models/pokmeon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<Observable<Pokemon>> {

  constructor(private ps: PokemonShellService) {
  }


  resolve(): Observable<Pokemon> {
    return this.ps.selectedPokemon$.pipe(
      filter((res) => {
        return !!res
      }),
      map((poke) => {
        return poke!;
      })
    )
  }
}
