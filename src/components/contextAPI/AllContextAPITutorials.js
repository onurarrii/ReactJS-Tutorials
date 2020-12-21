import PropDrillingTutorial from "./PropDrillingTutorial";
import React from "react";
import ContextAPITutorial from "./ContextAPITutorial";
import ContextWithSelectorTutorial from "./ContextWithSelectorTutorial";
import './styles.css';

const AllContextAPITutorials = () => {
  return (
    <div className="tutorials-container">
      <PropDrillingTutorial />
      <ContextAPITutorial />
      <ContextWithSelectorTutorial/>
    </div>
  );
}

export default AllContextAPITutorials;
