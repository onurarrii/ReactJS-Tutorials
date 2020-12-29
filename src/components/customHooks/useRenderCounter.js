import {useRef} from "react";

const useRenderCounter = () => {
  const counter = useRef(0);
  counter.current += 1;
  return counter.current;
}

export default useRenderCounter;
