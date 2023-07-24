import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTransportersComponent } from './search-transporters.component';

const routes: Routes = [
  {
    path: '',
    component: SearchTransportersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTransportersRoutingModule {}
