import { IRecorder, IRecorderManager } from "../interfaces";

export function createStop(manager: IRecorderManager) {
  return function stop(options: any): void {
    const recorder: IRecorder = manager.getRecorder();
    const { autoSave = true, fileName = "new Record" } = options;
    recorder.stop({ autoSave, fileName });
  };
}
