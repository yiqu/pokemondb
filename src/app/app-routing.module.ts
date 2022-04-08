import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';

const routes: Routes = [
  { path: "", redirectTo: "all", pathMatch: "full" },
  { path: 'all',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    data: {
      pageTitle: 'Main'
    }
  },
  { path: '**', component: NotFoundComponent,
    data: {
      pageTitle: 'Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
