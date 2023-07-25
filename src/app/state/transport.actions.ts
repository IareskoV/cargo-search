import { createAction, props } from '@ngrx/store';
import { Transport } from '../shared/interfaces/transport.interface';

export const FETCH_FILTERED_TRANSPORTERS =
  '[Your Feature] Fetch Filtered Transports';
export const FETCH_FILTERED_TRANSPORTERS_SUCCESS =
  '[Your Feature] Fetch Filtered Transports Success';
export const FETCH_FILTERED_TRANSPORTERS_FAILURE =
  '[Your Feature] Fetch Filtered Transports Failure';

export const fetchFilteredTransports = createAction(
  FETCH_FILTERED_TRANSPORTERS,
  props<{ filters: Transport }>()
);

export const fetchFilteredTransportersSuccess = createAction(
  FETCH_FILTERED_TRANSPORTERS_SUCCESS,
  props<{ filteredTransports: Transport[] }>()
);

export const fetchFilteredTransportsFailure = createAction(
  FETCH_FILTERED_TRANSPORTERS_FAILURE,
  props<{ error: any }>()
);
