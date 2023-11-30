import { useState, useEffect, ChangeEvent } from "react";

const App = () => {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  return (
    <>
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here"
        ></input>
        <h1>{counter}</h1>
        <button onClick={onClick}>Click</button>
      </div>
    </>
  );
};

export default App;
