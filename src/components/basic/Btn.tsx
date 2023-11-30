import { FC } from "react";

interface BtnProps {
  text: string;
  fontSize?: number;
}

const Btn: FC<BtnProps> = ({ text, fontSize }) => {
  console.log(text, "was rendered");
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "#fff",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
      }}
    >
      {text}
    </button>
  );
};

// const App = () => {
//   return (
//     <>
//       <Btn text="Save Changes" fontSize={18} />
//       <Btn text="Continue" />
//     </>
//   );
// };

// export default App;
