import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonShell, PokemonShellFavorite } from 'src/app/shared/models/pokmeon.model';
import { PokemonShellService } from '../../pokemon-shell.service';
import { ScrollPosition } from '../../store/pokemon/pokemon.state';

@Component({
  selector: 'app-main-all-pokemon-list',
  templateUrl: 'pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllPokemonListComponent implements OnInit {

  @Input()
  list?: PokemonShell[] | null;

  @Output()
  scrollLoad: EventEmitter<ScrollPosition> = new EventEmitter<ScrollPosition>();

  @Input()
  scrollDisabled: boolean = false;

  constructor(public ps: PokemonShellService) {

  }

  ngOnInit() {
  }

  showInfo(pokemon: any) {

  }

  onScrollDown() {
    this.scrollLoad.emit(ScrollPosition.Next);
  }

  onFavToggle(pokemon: PokemonShell) {
    console.log(pokemon)
    this.ps.pokemonFavorite(pokemon);
  }

  trackByFn(index: number, item: PokemonShell) {
    return item.name;
  }

}
