import React from "react";
import MemoUsage from "./MemoUsage";
import UseCallbackUsage from "./UseCallbackUsage";
import SetStateWithOldValue from "./SetStateWithOldValue";

const AllMemoryTutorials = () => {
  return (
    <div className="tutorials-container">
      <MemoUsage/>
      <UseCallbackUsage/>
      <SetStateWithOldValue />
    </div>
  );
}

export default AllMemoryTutorials;
