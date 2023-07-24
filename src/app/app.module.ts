import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { transportReducer } from './state/transport.reducer';
import { ApiEffects } from './state/transport.effects';
import { ApiService } from './shared/services/api.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ transports: transportReducer }, {}),
    EffectsModule.forRoot([ApiEffects]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
