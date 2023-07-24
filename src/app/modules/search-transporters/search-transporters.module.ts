import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTransportersRoutingModule } from './search-transporters-routing.module';
import { SearchTransportersComponent } from './search-transporters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchFieldComponent } from './search-field/search-field.component';
import { TransportersListComponent } from './transporters-list/transporters-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchTransportersComponent,
    SearchFieldComponent,
    TransportersListComponent,
  ],
  imports: [
    CommonModule,
    SearchTransportersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SearchTransportersModule {}
