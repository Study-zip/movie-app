import { useEffect, useState } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :<");
  }, []);
  return <h1>Hello</h1>;
};

const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </>
  );
};

export default App;
