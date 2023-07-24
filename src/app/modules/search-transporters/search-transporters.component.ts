import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from 'src/app/shared/interfaces/transport.interface';
import { TransportService } from 'src/app/shared/services/transport.service';

@Component({
  selector: 'app-search-transporters',
  templateUrl: './search-transporters.component.html',
  styleUrls: ['./search-transporters.component.scss'],
})
export class SearchTransportersComponent implements OnInit {
  transportersToDisplay: Observable<Transport[]>;

  constructor(private transportService: TransportService) {
    this.transportersToDisplay = this.transportService.transports$;
  }

  ngOnInit(): void {}

  handleSearch(event: any) {
    this.transportService.filterTransports(event);
  }
}
