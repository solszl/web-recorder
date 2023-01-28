import { createRecordActions } from "../actions";
import { IRecorder, IRecorderAction, IRecorderManager } from "../interfaces";

export class RecorderManagerImpl implements IRecorderManager {
  private _actions: IRecorderAction | undefined;
  private _recorder: IRecorder | undefined;

  public constructor() {}

  setRecorder(recorder: IRecorder) {
    this._recorder = recorder;
  }

  getRecorder(): IRecorder {
    return this._recorder as IRecorder;
  }

  getActions(): IRecorderAction {
    this._actions ||= createRecordActions(this);
    return this._actions;
  }

  dispose() {}
}
