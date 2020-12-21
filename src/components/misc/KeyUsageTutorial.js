import React, {useMemo, useState} from "react";
import {Button, Form} from "react-bootstrap";

const MAX_ELEMENT_SIZE = 5;

const KeyUsageTutorial = () => {
  const [elementIds, setElementIds] = useState([0]);

  const addElement = () => {
    setElementIds([elementIds.length, ...elementIds]);
  }

  const maxSizeReached = useMemo(() => elementIds.length >= MAX_ELEMENT_SIZE, [elementIds.length]);

  return (
    <div className="common-container">
      <div className="custom-container">
        <h1>Key Usage</h1>
        <Button onClick={addElement} disabled={maxSizeReached}>Add element to head</Button>
        <div className="element-list-container">
          <div className="element-list">
            <h4 className="text-danger">Index as key</h4>
            <div>
              {elementIds.map((id, index) => <CustomInput id={id} key={index}/>)}
            </div>
          </div>
          <div className="element-list">
            <h4 className="text-success">Id as key</h4>
            <div>
              {elementIds.map(id => <CustomInput id={id} key={id}/>)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const CustomInput = ({id}) => {
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);

  return <div className="input-wrapper">
    <h5 className="m-0">{String.fromCharCode(id + 'A'.charCodeAt(0))}</h5>
    <Form.Control
      type="text"
      value={text}
      onChange={onChange}
    />
  </div>;

}

export default KeyUsageTutorial;
