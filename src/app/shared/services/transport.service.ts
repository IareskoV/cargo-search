import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchFilteredTransports } from 'src/app/state/transport.actions';

import { Transport } from '../interfaces/transport.interface';

import { AppState } from 'src/app/state/transport.reducer';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  transports$;
  constructor(private store: Store<AppState>) {
    this.transports$ = this.store.select((state) => state.transports);
  }

  filterTransports(desiredTransport: Transport) {
    this.store.dispatch(fetchFilteredTransports({ filters: desiredTransport }));
  }
}
