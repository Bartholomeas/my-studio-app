'use client';

import { useEffect, useState } from "react";

type BreakpointType = "min" | "max";

export const useMediaQuery = (breakpointPixels: number, breakpointType: BreakpointType = "min") => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(${breakpointType}-width: ${breakpointPixels}px)`);

    if (mediaQuery.matches !== matches) setMatches(mediaQuery.matches);

    const listener = () => { setMatches(mediaQuery.matches); };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [breakpointPixels, breakpointType, matches]);

  return matches;
};
