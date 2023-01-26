import { IRecorderManager } from "../interfaces";

export function createSupport(manager: IRecorderManager) {
  return function support(options = {}): boolean {
    return true;
  };
}
