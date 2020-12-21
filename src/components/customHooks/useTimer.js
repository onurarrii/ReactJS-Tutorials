import {useEffect, useState} from "react";

const useTimer = (tickTimeMs) => {
  const [tickCount, setTickCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setTickCount(prev => prev + 1), tickTimeMs);
    return () => {
      clearInterval(intervalId);
    }
  }, [tickTimeMs]);

  return tickCount;

}

export default useTimer;
