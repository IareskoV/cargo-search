import { cargoTypes } from './enums/cargoTypes.enum';

//interface is used to easy extension (if yoy need a new type of vehicles,in addition to transporter)
export interface Transport {
  name: string;
  location: string;
  cargoTypes: cargoTypes[];
  maxWeight: number;
  maxCargoDimensions: [number, number, number];
}
