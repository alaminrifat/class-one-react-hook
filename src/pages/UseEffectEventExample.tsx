import { useEffect, useState, useEffectEvent } from "react";

export default function CounterLogger() {
  const [count, setCount] = useState(0);

  // Always sees the latest count
  const logCount = useEffectEvent(() => {
    console.log("Current count:", count);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      logCount(); // latest count, no stale closure
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // count is NOT needed here

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
