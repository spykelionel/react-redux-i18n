import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function usePreviousLocation() {
  const { pathname } = useLocation();
  const previousLocationRef = useRef<string | null>(null);

  useEffect(() => {
    previousLocationRef.current = pathname;
  }, [pathname]);

  return previousLocationRef.current;
}
