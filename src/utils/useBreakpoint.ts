import { useEffect, useState } from "react";

type Breakpoint = "xs" | "md";

export const useBreakpoint = (breakpoint: Breakpoint) => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (breakpoint === "xs") {
        setIsBelowBreakpoint(window.innerWidth < 375);
      } else if (breakpoint === "md") {
        setIsBelowBreakpoint(window.innerWidth < 768);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isBelowBreakpoint;
};
