import React, { useState } from "react";
import { Count } from "./Count";
import Header from "./Header";
import  "./App.css";
const App = () => {
  // const myStyle = {
  //   color: "white",
  //   backgroundColor: "blue",
  //   width: "100vw",
  //   height: "100vh",
  // };
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    // <div style={myStyle}>
      <div className="myStyle">
      <Header count={count} />
      <Count
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        resetHandler={resetHandler}
      />
    </div>
  );
};
export default App;
