import { FC, useState } from "react";

interface BtnProps {
  text: string;
  onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ text, onClick }) => {
  console.log(text, "was rendered");
  return (
    <button
      onClick={onClick}
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
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <>
      <Btn text={value} onClick={changeValue} />
      <Btn text="Continue" />
    </>
  );
};

export default App;
