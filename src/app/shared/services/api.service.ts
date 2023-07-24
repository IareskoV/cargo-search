import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { Transport } from '../interfaces/transport.interface';
import { filterTransports } from 'src/app/shared/utils/funcs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getFilteredTransports(filters: Transport): Observable<Transport[]> {
    //this filter should be at backend
    return this.http
      .get<Transport[]>('http://localhost:3000/transports')
      .pipe(map((res) => filterTransports(res, filters)));
  }
}
