import useRenderCounter from "../customHooks/useRenderCounter";
import React, {useCallback, useState} from "react";
import Button from "react-bootstrap/Button";
import './styles.css';


const PropDrillingTutorial = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = useCallback(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, [])

  return (
    <div className="common-container prop-drilling-container">
      <h1>Prop Drilling</h1>
      <Button variant="primary" onClick={generateRandomNumber}>Click to change random number</Button>
      <Tree randomNumber={randomNumber}/>
    </div>
  );

}

const Child = ({randomNumber}) => {
  const renderCount = useRenderCounter();
  return (
    <div className="child">
      <span>Child rendered {renderCount} times.</span>
      <span>{randomNumber}</span>
    </div>
  );

}

const Parent = (props) => {
  const renderCount = useRenderCounter();
  return (
    <div>
      <span>Parent rendered {renderCount} times.</span>
      <Child {...props} />
    </div>
  );
}


const Tree = (props) => {
  const renderCount = useRenderCounter();
  return (
    <div>
      <span>Tree rendered {renderCount} times.</span>
      <Parent {...props} />
    </div>
  );
}


export default PropDrillingTutorial;
