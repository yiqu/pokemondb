import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AllPokemonComponent } from './all/all.component';
import { PokemonDetailComponent } from './all/list/detail/pokemon-detail.component';

export const routes: Routes = [
  { path: "", component: MainComponent,
    children: [
      { path: '', redirectTo: 'species', pathMatch: 'full' },
      { path: 'species', component:  AllPokemonComponent, data: { pageTitle: 'Pokemon By Species' } },
      { path: ':pokemonName', component: PokemonDetailComponent, data: { pageTitle: 'Detail' } }
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
