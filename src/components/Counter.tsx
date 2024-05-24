import { useState } from "react";
import styles from "./Counter.module.scss";

type Props = {};

export const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={styles.btn}>
        Increment
      </button>
    </div>
  );
};
