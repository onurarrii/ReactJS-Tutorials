import React from "react";
import ForwardRefTutorial from "./ForwardRefTutorial";
import KeyUsageTutorial from "./KeyUsageTutorial";
import InputWithoutValueTutorial from "./InputWithoutValueTutorial";

const AllMiscTutorials = () => {
  return <div className="tutorials-container">
    <ForwardRefTutorial />
    <KeyUsageTutorial />
    <InputWithoutValueTutorial />
  </div>
};

export default AllMiscTutorials;
