export type Identifier = string | symbol;

export interface IRecorder {}

export interface IRecorderManager {
  getRecorder(): IRecorder | undefined;
  getActions(): IRecorderAction | undefined;
  dispose(): void;
}

export interface IRecorderAction {
  start(): void;
  pause(): void;
  stop(): void;
  exportFile(): void;
  isSupport(): boolean;
}
