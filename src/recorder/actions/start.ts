import { IRecorderManager } from "../interfaces";

export function createStart(manager: IRecorderManager) {
  return function start(options = {}): void {};
}
