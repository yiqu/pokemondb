import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { scrollToElementById } from '../shared/general.utils';
import { PokemonShellService } from './pokemon-shell.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public ps: PokemonShellService) {
  }

  ngOnInit() {
  }

  onActivate(component: any) {
    if (component.compId === "pokemonDetails") {
      
    } else if (component.compId === "pokemonList") {
      this.ps.selectedPokemon$.pipe(
        tap((res) => {
          if (res?.name) {
            setTimeout(() => {
              scrollToElementById(res.name, 5, 'center')
            }, 5)
          }
        })
      ).subscribe();
    }
  }
}
