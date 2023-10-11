import { useState, useEffect, useMemo } from "react";

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(() => typeof window !== "undefined");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export function useBreakpoint() {
  const isClient = useIsClient();
  const [breakpoints, setBreakpoints] = useState({
    isSM: false,
    isMD: false,
    isLG: false,
  });

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const width = window.innerWidth;
      const isS = width <= 640;
      const isM = width <= 768;
      const isL = width < 1120;

      setBreakpoints({ isSM: isS, isMD: isM, isLG: isL });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return useMemo(() => breakpoints, [breakpoints]);
}
