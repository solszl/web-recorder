import { IRecorderManager } from "../interfaces";

export function createPause(manager: IRecorderManager) {
  return function pause(options = {}): void {};
}
