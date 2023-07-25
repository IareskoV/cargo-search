import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import * as fromActions from './transport.actions';

@Injectable()
export class ApiEffects {
  fetchFilteredTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.FETCH_FILTERED_TRANSPORTERS),
      mergeMap(({ filters }) =>
        this.apiService.getFilteredTransporters(filters).pipe(
          map((filteredTransports) => {
            return fromActions.fetchFilteredTransportersSuccess({
              filteredTransports,
            });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
