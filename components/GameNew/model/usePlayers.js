import { useState } from "react";

function usePlayers(
 { isTimerRunning, onTimeOver}) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTimer((lastTimer) => Math.max(lastTimer - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setTimer(10);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (timer === 0) {
      onTimeOver();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

}




export { usePlayers };