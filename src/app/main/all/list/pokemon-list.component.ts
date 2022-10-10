import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonShell } from 'src/app/shared/models/pokmeon.model';
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

  constructor() {

  }

  ngOnInit() {

  }

  showInfo(pokemon: any) {

  }

  onScrollDown() {
    this.scrollLoad.emit(ScrollPosition.Next);
  }

}
