import React, {useEffect, useState } from "react";

const useHeader = () => {
  //   const scrollPosition = useRef(window.pageYOffset);
  const [scrollPos, setScrollPos] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          setScrollPos("active");
        } else {
          setScrollPos("");
        }
      });
    }
  }, []);


  return { setScrollPos, scrollPos };
};

export default useHeader;
