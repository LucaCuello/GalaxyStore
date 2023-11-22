import { useEffect, useState } from "react";

function Countdown() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (count > 0) {
      const timerId = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [count]);

  return (
    <>
      <p className="subpixel-antialiased text-violet-400 tracking-wide">
        Redirecting in... {count}
      </p>
    </>
  );
}

export default Countdown;
