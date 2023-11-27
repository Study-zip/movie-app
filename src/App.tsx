import { ChangeEvent, useState } from "react";

const App = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinutes(Number(event.target.value));
  };
  const hours = Math.round(minutes / 60);
  const reset = () => setMinutes(0);

  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes </label>
        <input
          value={minutes === 0 ? "" : minutes}
          id="minutes"
          placeholder="minutes"
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours </label>
        <input
          value={hours === 0 ? "" : hours}
          id="hours"
          placeholder="Hours"
          type="number"
        />
      </div>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default App;
