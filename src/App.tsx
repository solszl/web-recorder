import { useContext, useRef, useState } from "react";
import "./App.css";
import { RecorderContext } from "./react/core";

function App() {
  const [count, setCount] = useState(0);
  const [recording, setRecording] = useState(false);
  const context = useContext(RecorderContext);
  const [localStream, setLocalStream] = useState<MediaStream>();
  const timeRef = useRef(0)

  const selectSource = async () => {
    const { recorderManager } = context;
    if (!recorderManager) {
      return;
    }
    const stream: MediaStream = await recorderManager.getActions().selectSource({
      audio: true,
      video: {
        frameRate: 15
      }
    });
    setLocalStream(stream);
  };

  const startRecord = async () => {
    const { recorderManager } = context;
    if (!recorderManager) {
      return;
    }

    recorderManager.getActions().start({ onUpdate });
    setRecording(true);
  };

  const onUpdate = (data: Blob, total: Blob[]): void => {
    // console.log(data, total);
  }

  const stopRecord = (): void => {
    const { recorderManager } = context;
    if (!recorderManager) {
      return;
    }

    setRecording(false);
    recorderManager.getActions().stop({ autoSave: true, fileName: "hello" });
  }

  return (
    <div className="App">
      <div className="rec" style={{
        display: recording ? 'block' : 'none',
      }} >REC</div>
      <button onClick={selectSource}>选择源</button>
      <button onClick={startRecord}>开始录制</button>
      <button onClick={stopRecord}>结束并下载</button>
    </div>
  );
}

export default App;
