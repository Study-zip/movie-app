import React, { useState } from "react";

const KmToMiles = () => {
  const [killometers, setKillometers] = useState<number>(0);
  const [flipped, setFlipped] = useState<Boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKillometers(Number(event.target.value));
  };
  const reset = () => setKillometers(0);

  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  const getKillometers = () => {
    if (killometers === 0) return "";
    return flipped ? Math.round(killometers / 0.621371) : killometers;
  };

  const getMiles = () => {
    if (killometers === 0) return "";
    return flipped ? killometers : Math.round(killometers * 0.621371);
  };

  return (
    <div>
      <div>
        <label htmlFor="killometers">Killometers </label>
        <input
          value={getKillometers()}
          id="killometers"
          placeholder="killometers"
          type="number"
          onChange={onChange}
          disabled={!!flipped}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles </label>
        <input
          value={getMiles()}
          id="miles"
          placeholder="miles"
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

export default KmToMiles;
