import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './confirm-dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle';
import { PipeBundleModule } from './pipes/pipe-bundle.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { EnterEscapeKeyEventDirective } from './directives/enter-escape.directive.ts/enter-escape.directive';
import { ZorroModuleBundle } from './zorro-bundle.module';
import { SharedDropMenuComponent } from './components/drop-menu/drop-menu.component';
import { LoadingBarCssComponent } from './components/loading-bar-css/loading-bar-css.component';
import { PokemonLogoComponent } from './poke-logo/poke-logo.component';
import { SharedActionComponent } from './action-bar/action-bar.component';

@NgModule({
  declarations: [
    DialogConfirmComponent,
    EnterEscapeKeyEventDirective,
    SharedDropMenuComponent,
    LoadingBarCssComponent,
    PokemonLogoComponent,
    SharedActionComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    ZorroModuleBundle,
    PipeBundleModule,
    FlexLayoutModule,
    MatIconModule,
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModuleBundle,
    ZorroModuleBundle,
    PipeBundleModule,
    DialogConfirmComponent,
    EnterEscapeKeyEventDirective,
    SharedDropMenuComponent,
    LoadingBarCssComponent,
    PokemonLogoComponent,
    SharedActionComponent
  ],

  providers: [
  ],
})
export class SharedBudleModule { }
