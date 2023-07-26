import { cargoTypes } from '../interfaces/enums/cargoTypes.enum';
import { Transport } from '../interfaces/transport.interface';

function containsAllCargoTypes(
  transportCargoTypes: cargoTypes[],
  desiredCargoTypes: cargoTypes[]
): boolean {
  if (!desiredCargoTypes) return true;

  return desiredCargoTypes.every((desiredCargoType) =>
    transportCargoTypes.includes(desiredCargoType)
  );
}

function isMaxCargoDimensionsmoreThanOrEqualTo(
  transportMaxCargoDimensions: number[],
  desiredMaxCargoDimensions: number[]
): boolean {
  if (!desiredMaxCargoDimensions) return true;

  return (
    transportMaxCargoDimensions[0] >= desiredMaxCargoDimensions[0] &&
    transportMaxCargoDimensions[1] >= desiredMaxCargoDimensions[1] &&
    transportMaxCargoDimensions[2] >= desiredMaxCargoDimensions[2]
  );
}

function isMaxCargoWeightmoreThanOrEqualTo(
  transportMaxCargoWeight: number,
  desiredMaxCargoWeight: number
): boolean {
  return transportMaxCargoWeight >= desiredMaxCargoWeight;
}

function isLocationNameEqualTo(
  transportLocationName: string,
  desiredLocationName: string
): boolean {
  return (
    transportLocationName.toLowerCase() === desiredLocationName.toLowerCase()
  );
}

export function filterTransports(transports: Transport[], expected: Transport) {
  {
    return transports.filter((transport) => {
      return (
        isLocationNameEqualTo(transport.location, expected.location) &&
        isMaxCargoWeightmoreThanOrEqualTo(
          transport.maxWeight,
          expected.maxWeight
        ) &&
        isMaxCargoDimensionsmoreThanOrEqualTo(
          transport.maxCargoDimensions,
          expected.maxCargoDimensions
        ) &&
        containsAllCargoTypes(transport.cargoTypes, expected.cargoTypes)
      );
    });
  }
}
