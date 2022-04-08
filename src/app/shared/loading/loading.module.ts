import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModuleBundle } from '../material-bundle';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';
import { LoadingProgressComponent } from '../loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModuleBundle
  ],

  exports: [
    LoadingComponent,
    LoadingBarComponent,
    LoadingProgressComponent
  ],

  declarations: [
    LoadingComponent,
    LoadingBarComponent,
    LoadingProgressComponent
  ],

  providers: [

  ],
})
export class LoadingModule { }
