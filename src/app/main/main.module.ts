import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { AllPokemonComponent } from './all/all.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { pokemonShellEffects } from './store/pokemon/pokemon.effects';
import { pokemonShellEntityReducer } from './store/pokemon/pokemon.reducer';
import { POKEMON_SHELL_STORE_KEY } from './store/pokemon/pokemon.state';

@NgModule({
  imports: [
    StoreModule.forFeature(POKEMON_SHELL_STORE_KEY, pokemonShellEntityReducer),
    EffectsModule.forFeature(pokemonShellEffects),
    SharedBudleModule,
    LoadingModule,
    PipeBundleModule,
    MainRoutingModule
  ],

  exports: [
  ],

  declarations: [
    MainComponent,
    AllPokemonComponent
  ],

  providers: [],
})
export class MainModule { }
