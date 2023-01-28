import { IRecorderManager } from "../interfaces";

export function createSelectSource(manager: IRecorderManager) {
  return async function selectSource(options: DisplayMediaStreamOptions): Promise<MediaStream> {
    const recorder = manager.getRecorder();
    const localStream: MediaStream = await recorder.getMedia(options);
    return localStream;
  };
}
