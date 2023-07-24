import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Transport } from 'src/app/shared/interfaces/transport.interface';

@Component({
  selector: 'app-transporters-list',
  templateUrl: './transporters-list.component.html',
  styleUrls: ['./transporters-list.component.scss'],
})
export class TransportersListComponent implements OnInit {
  @Input() transportersObj: any;

  constructor() {}

  ngOnInit(): void {}
}
