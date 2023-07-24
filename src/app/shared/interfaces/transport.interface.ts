import { cargoTypes } from './enums/cargoTypes.enum';

export interface Transport {
  name: string;
  location: string;
  cargoTypes: cargoTypes[];
  maxWeight: number;
  maxCargoDimensions: [number, number, number];
}
