import {useEffect, useState} from "react";

const useControllableTimer = (initialTickTimeMs) => {
  const [tickCount, setTickCount] = useState(0);
  const [tickTimeMs, setTickTimeMs] = useState(initialTickTimeMs);

  useEffect(() => {
      const intervalId = setInterval(() => setTickCount(prev => prev + 1), tickTimeMs);
      return () => {
        console.debug('Removing old interval in Controllable Timer');
        clearInterval(intervalId);
      }
  }, [tickTimeMs]);

  const changeSpeed = (_tickTimeMs) => {
    setTickTimeMs(_tickTimeMs);
  }

  return {
    tickCount,
    changeSpeed,
  };

};

export default useControllableTimer;
