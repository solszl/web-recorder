import { IRecorder, IRecorderManager } from "../interfaces";

export function createStart(manager: IRecorderManager) {
  return function start(param: any): void {
    const recorder: IRecorder = manager.getRecorder();
    const { onUpdate } = param;
    recorder.start({ onUpdate });
  };
}
