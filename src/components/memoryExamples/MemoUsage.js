import React, {useCallback, useState} from "react";
import useRenderCounter from "../customHooks/useRenderCounter";
import "./styles.css";
import Button from 'react-bootstrap/Button';

const MemoUsage = () => {
  const renderCount = useRenderCounter();
  // It is only required to trigger re-render.
  const [, setState] = useState('');

  const cachedOnClick = useCallback(() => {
    setState('');
  }, []);

  return (
    <div className="common-container custom-container">
      <h1>React.Memo Usage</h1>
      <div className="container-info">
        <span>Container rendered {renderCount} times.</span>
        <Button variant="outline-danger" onClick={setState}>Click to re-render container.</Button>
      </div>
      <div className="test-buttons-container">
        <MemoizedButton innerText='Use Callback' onClick={cachedOnClick}/>
        {/* Since setState's memory reference never changes, the following button won't be re-rendered. */}
        <MemoizedButton innerText='Inline setState' onClick={setState}/>
        <MemoizedButton innerText='Inline Function' onClick={() => setState('')}/>
        {/* Inline style object is re-created in each render loop, thus its reference changes.
          Note that style is not even used in MemoizedButton */}
        <MemoizedButton innerText='Inline style' onClick={setState} style={{background: 'red'}}/>
      </div>
    </div>
  );

}

const MemoizedButton = React.memo(({innerText, onClick}) => {
  const renderCount = useRenderCounter();
  return <Button disabled onClick={onClick}>{innerText} - Rendered {renderCount} times.</Button>;
});

export default MemoUsage;
