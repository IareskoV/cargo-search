import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search-transporters/search-transporters.module').then(
        (mod) => mod.SearchTransportersModule
      ),
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
