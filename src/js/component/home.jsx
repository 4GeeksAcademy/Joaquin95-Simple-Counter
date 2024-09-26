import React, { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1>Seconds Counter</h1>
      <SecondsCounter seconds={secondsPassed} />
    </div>
  );
};

export default Home;
