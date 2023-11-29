import React, { useState } from "react";

const MinutesToHours = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const [flipped, setFlipped] = useState<Boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(Number(event.target.value));
  };
  const reset = () => setMinutes(0);

  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  const getMinutes = () => {
    if (minutes === 0) return "";
    return flipped ? minutes * 60 : minutes;
  };

  const getHours = () => {
    if (minutes === 0) return "";
    return flipped ? minutes : Math.round(minutes / 60);
  };

  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes </label>
        <input
          value={getMinutes()}
          id="minutes"
          placeholder="minutes"
          type="number"
          onChange={onChange}
          disabled={!!flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours </label>
        <input
          value={getHours()}
          id="hours"
          placeholder="Hours"
          onChange={onChange}
          type="number"
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>RESET</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
};

export default MinutesToHours;
