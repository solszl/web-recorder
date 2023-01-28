export type Identifier = string | symbol;

export type MediaParams = { video?: DisplayMediaStreamOptions; audio?: boolean };
export interface IRecorder {
  getMedia(param: DisplayMediaStreamOptions): Promise<MediaStream>;
  start(param: object): void;
  stop(param: object): void;
  save(param: object): void;
}

export interface IRecorderManager {
  getRecorder(): IRecorder;
  getActions(): IRecorderAction;
  dispose(): void;
}

export interface IRecorderAction {
  selectSource(param: DisplayMediaStreamOptions): Promise<MediaStream>;
  start(param: any): void;
  stop(param: any): void;
  pause(): void;
  resume(): void;
  exportFile(): void;
  isSupport(): boolean;
}
