import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import * as fromActions from './transport.actions';

@Injectable()
export class ApiEffects {
  fetchFilteredTransports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.FETCH_FILTERED_TRANSPORTS),
      mergeMap(({ filters }) =>
        this.apiService.getFilteredTransports(filters).pipe(
          map((filteredTransports) => {
            console.log(filteredTransports);
            return fromActions.fetchFilteredTransportsSuccess({
              filteredTransports,
            });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
