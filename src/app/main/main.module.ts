import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { AllPokemonComponent } from './all/all.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { allPokemonActionsEffects } from './store/action-bar/action-bar.effects';
import { actionbarEntityReducer } from './store/action-bar/action-bar.reducer';
import { ACTION_BAR_STORE_KEY } from './store/action-bar/action-bar.state';
import { pokemonShellEffects } from './store/pokemon/pokemon.effects';
import { pokemonShellEntityReducer } from './store/pokemon/pokemon.reducer';
import { POKEMON_SHELL_STORE_KEY } from './store/pokemon/pokemon.state';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AllPokemonListComponent } from './all/list/pokemon-list.component';

@NgModule({
  imports: [
    StoreModule.forFeature(POKEMON_SHELL_STORE_KEY, pokemonShellEntityReducer),
    EffectsModule.forFeature(pokemonShellEffects),
    StoreModule.forFeature(ACTION_BAR_STORE_KEY, actionbarEntityReducer),
    EffectsModule.forFeature(allPokemonActionsEffects),
    SharedBudleModule,
    LoadingModule,
    PipeBundleModule,
    InfiniteScrollModule,
    MainRoutingModule
  ],

  exports: [
  ],

  declarations: [
    MainComponent,
    AllPokemonComponent,
    AllPokemonListComponent
  ],

  providers: [],
})
export class MainModule { }
