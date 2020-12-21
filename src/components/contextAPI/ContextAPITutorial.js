import useRenderCounter from "../customHooks/useRenderCounter";
import React, {createContext, useCallback, useContext, useState} from "react";
import Button from "react-bootstrap/Button";
import './styles.css';

const TreeContext = createContext({randomNumber: 0});

const ContextAPITutorial = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = useCallback(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, [])

  return (
    <div className="common-container prop-drilling-container">
      <span>
        <h1>Basic Context API</h1>
        <h5>(Avoids prop drilling)</h5>
      </span>
      <Button variant="primary" onClick={generateRandomNumber}>Click to change random number</Button>
      <TreeContext.Provider value={{randomNumber: randomNumber}}>
        <Tree/>
      </TreeContext.Provider>
    </div>
  );

}

const Child = () => {
  const {randomNumber} = useContext(TreeContext);
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


const Tree = React.memo((props) => {
  const renderCount = useRenderCounter();
  return (
    <div>
      <span>Tree rendered {renderCount} times.</span>
      <Parent {...props} />
    </div>
  );
});


export default ContextAPITutorial;
