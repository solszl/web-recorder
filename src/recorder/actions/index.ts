import { IRecorderAction, IRecorderManager } from "../interfaces";
import { createExport } from "./export";
import { createPause } from "./pause";
import { createResume } from "./resume";
import { createSelectSource } from "./source";
import { createStart } from "./start";
import { createStop } from "./stop";
import { createSupport } from "./support";

export const createRecordActions = (manager: IRecorderManager): IRecorderAction => {
  return {
    selectSource: createSelectSource(manager),
    start: createStart(manager),
    stop: createStop(manager),
    pause: createPause(manager),
    resume: createResume(manager),
    exportFile: createExport(manager),
    isSupport: createSupport(manager),
  };
};
