import { createAction, props } from '@ngrx/store';
import { Transport } from '../shared/interfaces/transport.interface';

export const FETCH_FILTERED_TRANSPORTS =
  '[Your Feature] Fetch Filtered Transports';
export const FETCH_FILTERED_TRANSPORTS_SUCCESS =
  '[Your Feature] Fetch Filtered Transports Success';
export const FETCH_FILTERED_TRANSPORTS_FAILURE =
  '[Your Feature] Fetch Filtered Transports Failure';

export const fetchFilteredTransports = createAction(
  FETCH_FILTERED_TRANSPORTS,
  props<{ filters: Transport }>()
);

export const fetchFilteredTransportsSuccess = createAction(
  FETCH_FILTERED_TRANSPORTS_SUCCESS,
  props<{ filteredTransports: Transport[] }>()
);

export const fetchFilteredTransportsFailure = createAction(
  FETCH_FILTERED_TRANSPORTS_FAILURE,
  props<{ error: any }>()
);
