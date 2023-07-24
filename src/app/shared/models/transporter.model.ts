import { cargoTypes } from '../interfaces/enums/cargoTypes.enum';
import { Transport } from '../interfaces/transport.interface';

export class Transporter implements Transport {
  name: string;
  location: string;
  cargoTypes: cargoTypes[];
  maxWeight: number;
  maxCargoDimensions: [number, number, number];

  constructor(
    name: string,
    location: string,
    cargoTypes: cargoTypes[],
    maxWeight: number,
    maxCargoDimensions: [number, number, number]
  ) {
    this.name = name;
    this.location = location;
    this.cargoTypes = cargoTypes;
    this.maxWeight = maxWeight;
    this.maxCargoDimensions = maxCargoDimensions;
  }
}
