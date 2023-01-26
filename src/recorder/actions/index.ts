import { IRecorderAction, IRecorderManager } from "../interfaces";
import { createExport } from "./export";
import { createPause } from "./pause";
import { createStart } from "./start";
import { createStop } from "./stop";
import { createSupport } from "./support";

export const createRecordActions = (manager: IRecorderManager): IRecorderAction => {
  return {
    start: createStart(manager),
    pause: createPause(manager),
    stop: createStop(manager),
    exportFile: createExport(manager),
    isSupport: createSupport(manager),
  };
};
