import { FC } from "react";

interface BtnProps {
  text: string;
}

const Btn: FC<BtnProps> = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "#fff",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
};
const App = () => {
  return (
    <>
      <Btn text="Save Changes" />
      <Btn text="Continue" />
    </>
  );
};

export default App;
