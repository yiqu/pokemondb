import { Component, OnInit } from '@angular/core';
import { PokemonShellService } from '../pokemon-shell.service';
import { ScrollPosition } from '../store/pokemon/pokemon.state';

@Component({
  selector: 'app-main-all',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllPokemonComponent implements OnInit {

  title: string = "All Pokemons";
  scrollPosition = ScrollPosition;

  constructor(public ps: PokemonShellService) {
  }

  ngOnInit() {
    this.ps.fetchPokemonShells(10);
  }

  navPage(pos: ScrollPosition) {
    this.ps.fetchPokemonShells(undefined, pos);
  }
}
