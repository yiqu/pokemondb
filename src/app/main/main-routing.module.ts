import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AllPokemonComponent } from './all/all.component';

export const routes: Routes = [
  { path: "", component: MainComponent,
    children: [
      { path: '', redirectTo: 'species', pathMatch: 'full' },
      { path: 'species', component:  AllPokemonComponent,
        data: {
          pageTitle: 'Pokemon By Species'
        }
      },
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
