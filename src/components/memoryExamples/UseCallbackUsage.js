import React, {useCallback, useRef, useState} from "react";
import {Button, Row} from "react-bootstrap";
import './styles.css';

const UseCallbackUsage = () => {
  const [count, setCount] = useState(0);
  const counterObject = useRef({count: 0}).current;

  const incrementCounts = () => {
    setCount(prevCount => prevCount + 1);
    counterObject.count += 1;
  }

  const getWrongCounts = useCallback(() => {
    return [count, counterObject.count];
  }, []); // count and counterObject are not added as dependency.

  const getCorrectCounts = useCallback(() => {
    return [count, counterObject.count];
  }, [count, counterObject]);

  const [wrongCount, wrongObjectCount] = getWrongCounts();
  const [correctCount, correctObjectCount] = getCorrectCounts();

  return (
    <div className="common-container custom-container">
      <h1>UseCallback Usage</h1>
      <Button onClick={incrementCounts}>Increment counts</Button>
      <Row>
        <span>
          <span className="text-success">Correct:</span> Primitive: {correctCount}, Object: {correctObjectCount}
        </span>
      </Row>
      <Row>
        <span>
          <span className="text-danger">Wrong:</span> Primitive: {wrongCount}, Object: {wrongObjectCount}
        </span>
      </Row>
    </div>
  )

}

export default UseCallbackUsage;
