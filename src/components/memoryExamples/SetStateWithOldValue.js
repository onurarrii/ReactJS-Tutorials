import {Button, Row} from "react-bootstrap";
import React, {useState} from "react";

const ASYNC_TIMEOUT_MS = 2000;

const SetStateWithOldValue = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const incrementAsync = () => {
    setTimeout(() => {
      setCorrectCount(prev => prev + 1);
      setWrongCount(wrongCount + 1);
    }, ASYNC_TIMEOUT_MS);
  }

  const increment = () => {
    setCorrectCount(prev => prev + 1);
    setWrongCount(wrongCount + 1);
  }

  return (
    <div className="common-container custom-container">
      <h1>setState with Callback</h1>
      <Row>
        <Button className="flex-grow-1" onClick={increment}>Increment</Button>
        <Button className="flex-grow-1 async-button" onClick={incrementAsync}>Async Increment</Button>
      </Row>
      <Row className="justify-content-center">
        <span>
          <span className="text-success">Correct:</span> {correctCount}
        </span>
      </Row>
      <Row className="justify-content-center">
        <span>
          <span className="text-danger">Wrong:</span> {wrongCount}
        </span>
      </Row>
    </div>
  );
}

export default SetStateWithOldValue;
