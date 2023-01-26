import { createRecordActions } from "../actions";
import { IRecorder, IRecorderAction, IRecorderManager } from "../interfaces";

export class RecorderManagerImpl implements IRecorderManager {
  private _actions: IRecorderAction | undefined;
  private _recorder: IRecorder | undefined;

  public constructor() {}

  setRecorder(recorder: IRecorder) {
    this._recorder = recorder;
  }

  getRecorder(): IRecorder | undefined {
    return this._recorder;
  }

  getActions(): IRecorderAction | undefined {
    this._actions ||= createRecordActions(this);
    return this._actions;
  }

  dispose() {}
}
