import { IRecorderManager } from "../interfaces";

export function createStop(manager: IRecorderManager) {
  return function stop(options = {}): void {};
}
