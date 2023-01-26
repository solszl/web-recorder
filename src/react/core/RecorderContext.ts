import { createContext } from "react";
import { IRecorderManager } from "./../../recorder/interfaces";
export interface RecorderContextType {
  recorderManager: IRecorderManager | undefined;
}

export const RecorderContext = createContext<RecorderContextType>({ recorderManager: undefined });
