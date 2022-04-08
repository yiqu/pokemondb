import { NgModule } from '@angular/core';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
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
    MainComponent
  ],

  providers: [],
})
export class MainModule { }
