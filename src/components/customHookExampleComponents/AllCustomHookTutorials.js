import React from "react";
import TimerHookUsage from "./TimerHookUsage";
import ControllableTimerHookUsage from "./ControllableTimerHookUsage";

const AllCustomHookTutorials = () => {
  return <div className="tutorials-container">
    <TimerHookUsage/>
    <ControllableTimerHookUsage/>
  </div>
};

export default AllCustomHookTutorials;
