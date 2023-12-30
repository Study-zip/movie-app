import { useEffect, useState } from "react";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    USD: {
      price: number;
    };
  };
};

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [dollars, setDollars] = useState<number>(0);
  const [coinAmounts, setCoinAmounts] = useState<{ [key: string]: number }>({});

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    const enteredDollars = Number(enteredValue);
    setDollars(enteredDollars);
    calculateCoinAmounts(enteredDollars);
  };

  const calculateCoinAmounts = (dollars: number) => {
    const amounts: { [key: string]: number } = {};
    coins.forEach((coin) => {
      amounts[coin.id] = dollars / coin.quotes.USD.price;
    });
    setCoinAmounts(amounts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.coinpaprika.com/v1/tickers");
        const json = await res.json();
        setCoins(json);
        setLoading(false);
        calculateCoinAmounts(dollars);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dollars]);
  return (
    <>
      <h1>코인 시세 알아보기 ({coins.length})</h1>
      {loading && <strong>Loading...</strong>}
      <div>
        <span>I have...</span>
        <input value={dollars} onChange={onChange} type="number"></input>
        <span>Dollars</span>
      </div>
      <div>
        <select>
          {coins.map((coin: Coin) => (
            <option key={coin.id}>
              {coin.name}: {coinAmounts[coin.id]?.toFixed(3)} {coin.symbol}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CoinTracker;
