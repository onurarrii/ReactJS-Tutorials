import React, {useRef, useState} from "react";
import useRenderCounter from "../customHooks/useRenderCounter";

const InputWithoutValueTutorial = () => {
  return (
    <div className="common-container">
      <div className="custom-container">
        <h1>Input <code>value</code> Prop Usage</h1>
        <div className="d-flex">
          <div className="mr-2">
            <InputWithValue/>
          </div>
          <InputWithoutValue/>
        </div>
      </div>
    </div>
  )
};

const InputWithValue = () => {
  const renderCount = useRenderCounter();
  const [text, setText] = useState('');

  const onInputChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="d-flex flex-column">
      <h3><code>value</code> is used</h3>
      <input type="text" value={text} onChange={onInputChange}/>
      <span>Rendered {renderCount} times.</span>
    </div>
  );
}

const InputWithoutValue = () => {
  const renderCount = useRenderCounter();
  // Do not store text in state, as we don't need re-renders when input changes.
  const text = useRef();

  const onInputChange = (e) => {
    text.current = e.target.value;
  }

  return (
    <div className="d-flex flex-column">
      <h3><code>value</code> is not used</h3>
      <input type="text" onChange={onInputChange}/>
      <span>Rendered {renderCount} times.</span>
    </div>
  );
}

export default InputWithoutValueTutorial;
