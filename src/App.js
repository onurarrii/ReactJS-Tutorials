import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";
import TopNavigationBar from "./components/topNavigationBar/TopNavigationBar";

function App() {
  const [Component, setSelectedComponent] = useState();

  return (
    <div className="App">
      <div className="App-container">
        <div className="top">
          <TopNavigationBar onComponentSelected={setSelectedComponent}/>
        </div>
        <div className="center">
          {Component && <Component/>}
        </div>
      </div>
    </div>
  );
}

export default App;
