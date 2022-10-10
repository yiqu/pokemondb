import { Component, OnInit } from '@angular/core';
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
}
