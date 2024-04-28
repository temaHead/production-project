import { useState } from "react";
import classes from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.button } >
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default Counter;
