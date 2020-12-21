import useTimer from "../customHooks/useTimer";
import useRenderCounter from "../customHooks/useRenderCounter";
import React from "react";
import './styles.css';

const TimerHookUsage = () => {
  const tickCount = useTimer(1000);
  const renderCount = useRenderCounter();
  return <div className="common-container">
    <div className="custom-container">
      <h1>Auto Timer</h1>
      <span>Elapsed Time: {tickCount} seconds.</span>
      <span>Rendered: {renderCount} times.</span>
    </div>
  </div>
};

export default TimerHookUsage;
