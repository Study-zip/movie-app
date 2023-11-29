import React, { useState } from "react";
import MinutesToHours from "./components/MinutesToHours";
import KmToMiles from "./components/KmToMiles";

const App = () => {
  const [index, setIndex] = useState(0);
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(Number(event.target.value));
  };
  return (
    <>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value={0}>Select Your Units</option>
        <option value={1}>Minutes & Hours</option>
        <option value={2}>Km & Miles</option>
      </select>
      <hr />
      {index === 1 ? <MinutesToHours /> : null}
      {index === 2 ? <KmToMiles /> : null}
    </>
  );
};

export default App;
