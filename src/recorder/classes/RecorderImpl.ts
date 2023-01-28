import { IRecorder } from "../interfaces";

type mediaConstraints = { video: boolean; audio?: boolean };
export class RecorderImpl implements IRecorder {
  private _recorder: MediaRecorder | undefined;
  private _constrains: mediaConstraints;
  private _localStream: MediaStream | undefined;
  private _chunks: Blob[] = [];
  private _onChunksUpdateCallback: Function | undefined;
  public constructor({ video = true, audio = false }) {
    // new MediaRecorder()
    this._constrains = { video, audio };
  }

  public async getMedia(params: DisplayMediaStreamOptions): Promise<MediaStream> {
    const localStream: MediaStream = await navigator.mediaDevices.getDisplayMedia(params);
    this._localStream = localStream;
    return localStream;
  }

  public start(param: any): void {
    const { _localStream } = this;
    if (!_localStream) {
      return;
    }

    const option = {
      mimeType: "video/webm;codecs=vp8",
    };

    //
    const { onUpdate } = param;
    this._onChunksUpdateCallback = onUpdate;

    this._recorder ||= new MediaRecorder(_localStream, option);
    this._recorder.addEventListener("dataavailable", this._onDataArrival.bind(this));
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start
    this._recorder.start(200);
  }

  public stop(param: any): void {
    this._recorder?.stop();
    const { autoSave, fileName } = param;
    if (autoSave) {
      this._saveChunks(fileName);
    }
  }

  public save(param: any): void {}

  private _onDataArrival(evt: BlobEvent): void {
    if (evt.data.size > 0) {
      this._chunks.push(evt.data);
      this._onChunksUpdateCallback?.(evt.data, this._chunks);
    }
  }

  private _saveChunks(fileName: string = "new Record") {
    const { _chunks } = this;
    if (!_chunks.length) {
      return;
    }
    const blob = new Blob(_chunks, { type: "video/mp4" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.style.display = "none";
    a.download = `${fileName}.mp4`;
    a.click();
  }
}
