import { useEffect, useState, useEffectEvent } from "react";

export default function CounterLogger() {
  const [count, setCount] = useState(0);

  const logCount = useEffectEvent(() => {
    console.log("Current count value:", count);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      logCount();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
