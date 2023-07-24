import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './transport.reducer';
import { Transport } from '../shared/interfaces/transport.interface';

export const selectTransportState =
  createFeatureSelector<AppState>('transports');

export const selectAllTransports = createSelector(
  selectTransportState,
  (state) => state.transports
);
