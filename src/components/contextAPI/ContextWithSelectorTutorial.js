import React, {createContext, useCallback, useContext, useState} from "react";
import useRenderCounter from "../customHooks/useRenderCounter";
import {Button} from "react-bootstrap";
import './styles.css';

const TreeContext = createContext({});
const LEVEL_COUNT = 5;
const getRandomLevel = () => Math.floor(Math.random() * (LEVEL_COUNT + 1));


const ContextWithSelectorTutorial = () => {

  const [selectedLevel, setSelectedLevel] = useState(getRandomLevel());
  const refreshSelectedLevel = useCallback(() => {
    setSelectedLevel(getRandomLevel());
  }, []);

  return (
    <div className="common-container container-info">
      <h1>Context with Selector</h1>
      <span>Selected level: {selectedLevel + 1}</span>
      <Button onClick={refreshSelectedLevel}>Click to randomly select a node</Button>
      <div>
        <hr/>
      </div>
      <TreeContext.Provider value={selectedLevel}>
        <Node level={0}/>
      </TreeContext.Provider>
    </div>
  );
}

/**
 * It is a bridge between MemoizedNodes and context. Everytime the context changes, it re-renders.
 * However, it pre-computes isSelected value so that the MemoizedNodes don't re-render if they are selection status
 * remains the same.
 */
const Node = ({level}) => {
  const selectedLevel = useContext(TreeContext);
  return <MemoizedNode level={level} isSelected={level === selectedLevel} />;
};

const MemoizedNode = React.memo(({level, isSelected}) => {
  const renderCount = useRenderCounter();
  const backgroundColor = isSelected ? '#0069D9' : 'transparent';
  return (
    <div style={{paddingLeft: '20px'}}>
      <span className="tree-node" style={{backgroundColor}}>Rendered {renderCount} times.</span>
      {level < LEVEL_COUNT && <Node level={level + 1}/>}
    </div>
  )
});

export default ContextWithSelectorTutorial;
