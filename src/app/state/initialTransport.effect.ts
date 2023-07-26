import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import * as fromActions from './transport.actions';

//effect to fetch all transports (for initial state)
@Injectable()
export class InitialTransportEffects {
  fetchFilteredTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.FETCH_INTIAL_STATE),
      mergeMap(() =>
        this.apiService.getAllTransporters().pipe(
          map((transports) => {
            return fromActions.fetchInitialStateSuccess({
              transports,
            });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
