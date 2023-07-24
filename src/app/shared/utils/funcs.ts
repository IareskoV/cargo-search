import { cargoTypes } from '../interfaces/enums/cargoTypes.enum';
import { Transport } from '../interfaces/transport.interface';

function containsAllCargoTypes(
  desiredCargoTypes: cargoTypes[],
  transportCargoTypes: cargoTypes[]
): boolean {
  if (!desiredCargoTypes) return true;

  return desiredCargoTypes.every((desiredCargoType) =>
    transportCargoTypes.includes(desiredCargoType)
  );
}

function isMaxCargoDimensionsLessThanOrEqualTo(
  transportMaxCargoDimensions: number[],
  desiredMaxCargoDimensions: number[]
): boolean {
  if (!desiredMaxCargoDimensions) return true;

  return (
    transportMaxCargoDimensions[0] <= desiredMaxCargoDimensions[0] &&
    transportMaxCargoDimensions[1] <= desiredMaxCargoDimensions[1] &&
    transportMaxCargoDimensions[2] <= desiredMaxCargoDimensions[2]
  );
}
export function filterTransports(transports: Transport[], expected: Transport) {
  {
    return transports.filter((transport) => {
      return (
        (!expected.name ||
          transport.name.toLowerCase().includes(expected.name.toLowerCase())) &&
        (!expected.location ||
          transport.location
            .toLowerCase()
            .includes(expected.location.toLowerCase())) &&
        (!expected.cargoTypes ||
          containsAllCargoTypes(expected.cargoTypes, transport.cargoTypes)) &&
        (!expected.maxWeight || transport.maxWeight <= expected.maxWeight) &&
        (!expected.maxCargoDimensions ||
          isMaxCargoDimensionsLessThanOrEqualTo(
            transport.maxCargoDimensions,
            expected.maxCargoDimensions
          ))
      );
    });
  }
}
