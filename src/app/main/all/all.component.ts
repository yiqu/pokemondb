import { Component, OnInit } from '@angular/core';
import { PokemonShellService } from '../pokemon-shell.service';

@Component({
  selector: 'app-main-all',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllPokemonComponent implements OnInit {
  constructor(public ps: PokemonShellService) {
  }

  ngOnInit() {
    this.ps.fetchPokemonShells();
  }
}
