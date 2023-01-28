import { FC, memo, ReactNode, useEffect } from "react";
import { createRecorderManager } from "../../recorder";
import { RecorderContext } from "./RecorderContext";
export type RecorderProviderProps<T> = {
  audio: boolean;
  children?: ReactNode;
};

export const RecorderProvider: FC<RecorderProviderProps<unknown>> = memo(function RecorderProvider({
  children,
  ...props
}) {
  const [manager] = getContextValue(props);
  useEffect(() => {
    return () => {
      manager?.recorderManager.dispose();
    };
  }, []);
  return <RecorderContext.Provider value={manager}>{children}</RecorderContext.Provider>;
});

function getContextValue(props: RecorderProviderProps<unknown>) {
  const audio = props.audio;
  const manager = createRecorderManager({ audio });
  return [{ recorderManager: manager }];
}
