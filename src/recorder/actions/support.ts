import { IRecorderManager } from "../interfaces";

const isScreenShareSupported = (): boolean => {
  return !!navigator?.mediaDevices?.getDisplayMedia;
};
const isWebRTCSupported = (): boolean => {
  return !!navigator?.mediaDevices?.getUserMedia;
};
export function createSupport(manager: IRecorderManager) {
  return function support(options = {}): boolean {
    return isScreenShareSupported() && isWebRTCSupported();
  };
}
