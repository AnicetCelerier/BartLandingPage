import React, { useState, useEffect } from "react";

const useBlock7Media = () => {
  const [customCarousel, setcustomCarousel] = useState<{
    fix: boolean;
    alignement: number | "end";
  }>({ fix: true, alignement: "end" });

  useEffect(() => {
    if (window.innerWidth > 835) {
      setcustomCarousel({ fix: false, alignement: 0.12 });
    }
  }, [customCarousel.alignement, customCarousel.fix]);

  return {
    customCarousel,
  };
};

export default useBlock7Media;
