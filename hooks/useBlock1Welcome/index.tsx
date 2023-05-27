import React, { useEffect, useMemo, useState } from "react";

const useBlock1Welcome = () => {
  const graphicElements = [
    { color: "#FF762C", image: "../assets/images/character1.png" },
    { color: "#8F6DA8", image: "../assets/images/character2.png" },
    { color: "#FFA4C4", image: "../assets/images/character3.png" },
    { color: "#E1E062", image: "../assets/images/character4.png" },
    { color: "#D4538B", image: "../assets/images/character5.png" },
    { color: "#8F6DA8", image: "../assets/images/character6.png" },
    { color: "#FF5F46", image: "../assets/images/character7.png" },
  ];

  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentElementIndex(
        (prevIndex) => (prevIndex + 1) % graphicElements.length
      );
    }, 5000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [currentElementIndex, graphicElements.length]);

  return { graphicElements, currentElementIndex };
};

export default useBlock1Welcome;
