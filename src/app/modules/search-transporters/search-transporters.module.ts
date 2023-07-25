import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTransportersRoutingModule } from './search-transporters-routing.module';
import { SearchTransportersComponent } from './search-transporters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchFieldComponent } from './search-field/search-field.component';
import { TransportersListComponent } from './transporters-list/transporters-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
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
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class SearchTransportersModule {}
