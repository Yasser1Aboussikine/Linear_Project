import React, { useState, useEffect } from "react";

const Counter = ({ end, duration = 5000 }) => {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 9);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default Counter; 