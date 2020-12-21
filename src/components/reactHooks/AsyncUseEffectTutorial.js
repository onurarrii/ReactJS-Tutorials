import React, {useEffect, useState} from "react";
import useTimer from "../customHooks/useTimer";
import '../misc/styles.css';

const INTERVAL_BETWEEN_ASYNC_CALL = 2000;

const mockService = () => {
  const response = Math.floor(Math.random() * 10000);
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), INTERVAL_BETWEEN_ASYNC_CALL);
  });
}

const AsyncUseEffectTutorial = () => {
  const tickCount = useTimer(INTERVAL_BETWEEN_ASYNC_CALL * 2);

  return <div className="common-container">
    <div className="custom-container">
      <span>
        <h1>Async UseEffect</h1>
        <h6>Mock API is fetched every 2 seconds.</h6>
        <h6>Cleanup function should be called after each fetch.</h6>
      </span>
      <div className="d-flex">
        <CorrectFetcher tick={tickCount}/>
        <WrongFetcher tick={tickCount}/>
      </div>
    </div>
  </div>
};

const CorrectFetcher = ({tick}) => {
  const [data, setData] = useState(null);
  const [cleanupCallCount, setCleanupCallCount] = useState(0);


  useEffect(() => {
    setData(null);
    const fetch = async () => {
      const response = await mockService();
      setData(response);
    }
    fetch();
    return () => {
      setCleanupCallCount(prev => prev + 1);
    };
  }, [tick]);

  return <div className="d-flex flex-column mr-4">
    <h4 className="text-success">Correct</h4>
    <span className="fetch-result-span">{data || 'Fetching...'}</span>
    <span>Cleanup called {cleanupCallCount} times.</span>
  </div>
}

const WrongFetcher = ({tick}) => {
  const [data, setData] = useState(null);
  const [cleanupCallCount, setCleanupCallCount] = useState(0);

  useEffect(async () => {
    setData(null);
    const response = await mockService();
    setData(response);
    return () => {
      setCleanupCallCount(prev => prev + 1);
    };
  }, [tick]);

  return <div className="d-flex flex-column">
    <h4 className="text-danger">Wrong</h4>
    <span className="fetch-result-span">{data || 'Fetching...'}</span>
    <span>Cleanup called {cleanupCallCount} times.</span>
  </div>
}

export default AsyncUseEffectTutorial;
