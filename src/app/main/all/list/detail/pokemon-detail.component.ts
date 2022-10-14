import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, map, Subject, take, takeUntil } from 'rxjs';
import { PokemonShellService } from 'src/app/main/pokemon-shell.service';
import { scrollToElementById, scrollToTop } from 'src/app/shared/general.utils';
import { Pokemon } from 'src/app/shared/models/pokmeon.model';

@Component({
  selector: 'app-main-all-pokemon-detail',
  templateUrl: 'pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  compId: string = 'pokemonDetails';
  pokemonDetail?: Pokemon = undefined;
  compDest$: Subject<void> = new Subject<void>();

  constructor(public ps: PokemonShellService, private route: ActivatedRoute) {
    this.route.data.pipe(
      takeUntil(this.compDest$),
      map((res) => {
        return res['pokemonDetail'];
      })
    ).subscribe((res) => {
      this.pokemonDetail = res;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //this.ps.resetPokemonDetailProp();
    this.compDest$.next();
    this.compDest$.complete();
  }
}
