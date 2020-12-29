import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import './styles.css';
import classNames from "classnames";
import AllContextAPITutorials from "../contextAPI/AllContextAPITutorials";
import AllMemoryTutorials from "../memoryExamples/AllMemoryTutorials";
import AllCustomHookTutorials from "../customHookExampleComponents/AllCustomHookTutorials";
import AllMiscTutorials from "../misc/AllMiscTutorials";
import AllReactHooksTutorials from "../reactHooks/AllReactHooksTutorialsjs";

const ITEMS = [
  {name: 'Custom Hooks', component: () => AllCustomHookTutorials},
  {name: 'Memoization/Reference', component: () => AllMemoryTutorials},
  {name: 'React Hooks', component: () => AllReactHooksTutorials},
  {name: 'Context API', component: () => AllContextAPITutorials},
  {name: 'Misc', component: () => AllMiscTutorials},
];

const TopNavigationBar = ({onComponentSelected}) => {
  const [selectedItem, setSelectedItem] = useState(ITEMS[0]);

  useEffect(() => {
    onComponentSelected(selectedItem.component);
  }, []);

  const onSelect = (item) => {
    setSelectedItem(item);
    onComponentSelected(item.component);
  }

  return <div className="top-bar-container">
    {ITEMS.map(item => {
      return <div
        key={item.name}
        onClick={() => onSelect(item)}
        className={classNames(['top-bar-item', {'selected-item': item.name === selectedItem.name}])}>
        {item.name}
      </div>
    })}
  </div>;
}

export default TopNavigationBar;

TopNavigationBar.propTypes = {
  onComponentSelected: PropTypes.func,
};

TopNavigationBar.defaultProps = {
  onComponentSelected: () => {
  },
}
