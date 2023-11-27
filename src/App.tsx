import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  // counter : 초기값(0), setCounter : 값을 바꾸는 함수(modifier)
  const handleClick = () => {
    console.log("Counter Clicked");
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default App;
