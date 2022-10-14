import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { scrollToElementById } from 'src/app/shared/general.utils';
import { MenuOption } from 'src/app/shared/models/drop-menu.model';
import { PokemonShellService } from '../pokemon-shell.service';
import { ScrollPosition } from '../store/pokemon/pokemon.state';

@Component({
  selector: 'app-main-all',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllPokemonComponent implements OnInit {

  compId: string = 'pokemonList';
  title: string = "Pokemon Directory";
  scrollPosition = ScrollPosition;
  actionBtns: MenuOption[] = [];
  showPageData: boolean = false;

  constructor(public ps: PokemonShellService) {
  }

  ngOnInit() {
  }

  navPage(pos: ScrollPosition) {
    this.ps.fetchPokemonShells(undefined, pos);
  }

  onScroll(pos: ScrollPosition) {
    this.navPage(ScrollPosition.Next);
  }

  togglePageData() {
    this.showPageData = !this.showPageData;
  }
}
