import {useEffect, useRef} from "react";

const useRenderCounter = () => {
  const counter = useRef(1);
  // React do not allow having side effects in render. Thus, use useEffect.
  useEffect(() => {
    // Takes effect in the following render.
    counter.current += 1;
  })
  return counter.current;
}

export default useRenderCounter;
