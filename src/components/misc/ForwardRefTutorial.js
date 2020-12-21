import React, {useRef} from "react";
import {Button} from "react-bootstrap";
import './styles.css';

const generateRandomColor = () => {
  const generateNumber = () => Math.floor(Math.random() * 255);
  const rgbValuesStr = Array(3)
    .fill(0)
    .map(generateNumber)
    .join(",");
  return `rgb(${rgbValuesStr})`;
};

const ForwardRefTutorial = () => {
  const ref = useRef();

  const changeBackgroundColor = () => {
    ref.current.style.backgroundColor = generateRandomColor();
  };

  return (
    <div className="common-container">
      <div className="custom-container">
        <h1>Forward Ref Usage</h1>
        <Button onClick={changeBackgroundColor}>Change Color</Button>
        <MyColorableArea ref={ref}/>
      </div>
    </div>
  );
};

const MyColorableArea = React.forwardRef((props, ref) => {
  return <div className="colorable-area-container">
    <div ref={ref}/>
  </div>;
})

export default ForwardRefTutorial;
