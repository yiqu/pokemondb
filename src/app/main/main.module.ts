import { NgModule } from '@angular/core';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { AllPokemonComponent } from './all/all.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
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
