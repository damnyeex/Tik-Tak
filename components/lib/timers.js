import { useState } from "react";
import { useEffect } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();
  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }
    const clear = setInterval(() => {
      setNow(Date.now());
    }, interval);
    return () => {
      clearInterval(clear);
    };
  }, [interval, enabled]);
  return now;
}

export function useInterval(interval, enabled, callback) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const int = setInterval(() => {
      callback(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [enabled, interval]);
}
/*

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
*/
