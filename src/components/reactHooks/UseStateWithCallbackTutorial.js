import React, {useCallback, useRef, useState} from "react";
import '../misc/styles.css';
import useTimer from "../customHooks/useTimer";

const UseStateWithCallbackTutorial = () => {

  useTimer(1000);

  const defaultUseStateCallCount = useRef(0);
  const callbackUseStateCallCount = useRef(0);

  const initState = useCallback(() => {
    defaultUseStateCallCount.current += 1;
  }, []);

  const initStateCallback = useCallback(() => {
    callbackUseStateCallCount.current += 1;
  }, []);

  useState(initState());
  useState(initStateCallback);


  return (
    <div className="common-container">
      <div className="custom-container">
        <span>
          <h1>useState with Callback</h1>
          <h6>The component is re-rendered every second.</h6>
        </span>

        <span>
          <h4>Using <code>useState(initState())</code>:</h4>
          <code>initState</code> called {defaultUseStateCallCount.current} times
        </span>
        <span>
          <h4>Using <code>useState(initStateCallback)</code>:</h4>
          <code>initStateCallback</code> called {callbackUseStateCallCount.current} times
        </span>
      </div>
    </div>
  );


}

export default UseStateWithCallbackTutorial;
