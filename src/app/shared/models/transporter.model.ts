import { cargoTypes } from '../interfaces/enums/cargoTypes.enum';
import { Transport } from '../interfaces/transport.interface';

export class Transporter implements Transport {
  name: string;
  location: string;
  cargoTypes: cargoTypes[];
  maxWeight: number;
  maxCargoDimensions: [number, number, number];

  constructor({
    name,
    location,
    cargoTypes,
    maxWeight,
    maxCargoDimensions,
  }: Partial<Transporter>) {
    this.name = name || '';
    this.location = location || '';
    this.cargoTypes = cargoTypes || [];
    this.maxWeight = maxWeight || 0;
    this.maxCargoDimensions = maxCargoDimensions || [0, 0, 0];
  }
}
