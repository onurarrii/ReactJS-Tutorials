import React, {useCallback, useState} from "react";
import useRenderCounter from "../customHooks/useRenderCounter";
import useControllableTimer from "../customHooks/useControllableTimer";

const DEFAULT_TICK_TIME_MS = 1000;

const ControllableTimerHookUsage = () => {
  const renderCount = useRenderCounter();
  const [tickTimeMs, setTickTimeMs] = useState(DEFAULT_TICK_TIME_MS);
  const {tickCount, changeSpeed} = useControllableTimer(tickTimeMs);

  const onTickTimeMsSubmitted = useCallback((newTickTimeMs) => {
    setTickTimeMs(newTickTimeMs);
    changeSpeed(newTickTimeMs);
  }, [changeSpeed]);

  return (
    <div className="common-container">
      <h1>Controllable Timer</h1>
      <div className="custom-container">
        <span>Rendered {renderCount} times.</span>
        <TickTimeInput onChange={onTickTimeMsSubmitted}/>
        <span>Tick count: {tickCount}</span>
      </div>
    </div>
  );
}

const MIN_TICK_TIME_MS = 500;
const MAX_TICK_TIME_MS = 4000;

const TickTimeInput = ({onChange}) => {
  const [tickTimeMs, setTickTimeMs] = useState(DEFAULT_TICK_TIME_MS);

  const onTickTimeMsChange = useCallback((e) => {
    setTickTimeMs(e.target.value);
  }, []);

  const onTickTimeMsMouseUp = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange])

  return (
    <div className="tick-time-input-container">
      <label htmlFor="tickTime">Tick Time (ms): </label>
      <input type="range"
             name="tickTime"
             onChange={onTickTimeMsChange}
             onMouseUp={onTickTimeMsMouseUp} // Trigger change event only when user's mouse loses focus
             defaultValue={DEFAULT_TICK_TIME_MS}
             min={MIN_TICK_TIME_MS}
             max={MAX_TICK_TIME_MS}
             step={100}/>
      <span>{tickTimeMs}</span>
    </div>
  );
}

export default ControllableTimerHookUsage;
