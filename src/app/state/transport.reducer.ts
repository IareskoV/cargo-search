import { createReducer, on } from '@ngrx/store';
import { Transport } from '../shared/interfaces/transport.interface';
import {
  fetchFilteredTransportsFailure,
  fetchFilteredTransportersSuccess,
} from './transport.actions';

export interface AppState {
  transports: Transport[];
}

export const initialState: AppState = {
  transports: [],
};

export const transportReducer = createReducer(
  initialState,
  on(fetchFilteredTransportersSuccess, (state, { filteredTransports }) => ({
    ...state,
    transports: filteredTransports,
  })),
  on(fetchFilteredTransportsFailure, (state, { error }) => ({
    ...state,
    data: [],
  }))
);
