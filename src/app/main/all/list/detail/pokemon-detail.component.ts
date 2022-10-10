import { Component, OnInit } from '@angular/core';
import { PokemonShellService } from 'src/app/main/pokemon-shell.service';
import { scrollToElementById, scrollToTop } from 'src/app/shared/general.utils';

@Component({
  selector: 'app-main-all-pokemon-detail',
  templateUrl: 'pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(public ps: PokemonShellService) {
  }

  ngOnInit() {
    scrollToElementById('app-dashboard-action-bar');
  }
}
