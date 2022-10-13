import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { PokemonSpeciesService } from 'src/app/main/pokemon-species.service';

@Component({
  selector: 'app-main-all-pokemon-detail-flavor-text',
  templateUrl: 'flavor-text.component.html',
  styleUrls: ['./flavor-text.component.scss', '../pokemon-detail.component.scss']
})
export class PokemonFlavorTextComponent implements OnInit, OnDestroy {

  flavorText: string | undefined = "";
  private compDest$: Subject<void> = new Subject<void>();

  constructor(public pss: PokemonSpeciesService) {
  }

  ngOnInit() {
    this.pss.pokemonSpecies$.pipe(
      takeUntil(this.compDest$),
      map((res) => {
        return res?.flavor_text_entries[0].flavor_text;
      })
    ).subscribe({
      next: (res) => {
        this.flavorText = res;
      }
    })
  }

  ngOnDestroy(): void {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
