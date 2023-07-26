import { createReducer, on } from '@ngrx/store';
import { Transport } from '../shared/interfaces/transport.interface';
import {
  fetchFilteredTransportsFailure,
  fetchFilteredTransportersSuccess,
  fetchInitialStateSuccess,
} from './transport.actions';

export interface AppState {
  transports: Transport[];
}

export const initialState: AppState = {
  transports: [],
};

//handle state change
export const transportReducer = createReducer(
  initialState,
  on(fetchFilteredTransportersSuccess, (state, { filteredTransports }) => ({
    ...state,
    transports: filteredTransports,
  })),
  on(fetchFilteredTransportsFailure, (state, { error }) => ({
    ...state,
    data: [],
  })),
  on(fetchInitialStateSuccess, (state, { transports }) => ({
    ...state,
    transports: transports,
  }))
);
