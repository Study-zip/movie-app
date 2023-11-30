import { FC } from "react";
import styles from "./Button.module.css";

interface BtnProps {
  text: string;
}

const Button: FC<BtnProps> = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;
