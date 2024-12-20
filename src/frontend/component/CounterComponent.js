import React, { useState, useEffect } from "react";

const CounterComponent = ({ start, end, time }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("counter");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Update counter when the component becomes visible and limit changes
  useEffect(() => {
    const counter = (setter, start, end, duration) => {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        current += increment;
        setter(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    };
    if (isVisible) {
      counter(setCount, start, end, time);
    }
  }, [isVisible]);

  return (
    <h2 id="counter" className="m-auto">
      {count}+
    </h2>
  );
};

export default CounterComponent;
