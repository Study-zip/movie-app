import { useState, useEffect } from "react";

const App = () => {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  const Once = () => {
    console.log("once");
  };
  useEffect(Once, []);
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>Click</button>
      </div>
    </>
  );
};

export default App;
