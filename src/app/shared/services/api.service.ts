import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { Transport } from '../interfaces/transport.interface';
import { Transporter } from '../models/transporter.model';
import { filterTransports } from 'src/app/shared/utils/funcs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getFilteredTransporters(filters: Transporter): Observable<Transport[]> {
    //this filter should be at backend
    return this.http
      .get<Transporter[]>('http://localhost:3000/transports')
      .pipe(map((res) => filterTransports(res, filters)));
  }
}
