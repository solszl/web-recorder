import { RecorderImpl } from "./classes/RecorderImple";
import { RecorderManagerImpl } from "./classes/RecorderManagerImpl";
import { IRecorderManager } from "./interfaces";
export function createRecorderManager({ audio = false }): IRecorderManager {
  const recorder = new RecorderImpl({ audio });
  const manager = new RecorderManagerImpl();
  manager.setRecorder(recorder);
  // collect actions...
  manager.getActions();
  return manager;
}
