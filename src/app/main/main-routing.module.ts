import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AllPokemonComponent } from './all/all.component';
import { PokemonDetailComponent } from './all/list/detail/pokemon-detail.component';
import { PokemonDetailResolver } from '../shared/resolvers/pokemon-detail/pokemon-detail-resolver.service';

export const routes: Routes = [
  { path: "", component: MainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component:  AllPokemonComponent, data: { pageTitle: 'All Pokemon' } },
      { path: ':pokemonName', component: PokemonDetailComponent, data: { pageTitle: 'Detail' },
        resolve: { pokemonDetail: PokemonDetailResolver } }
    ],
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
