import { useState, useEffect } from "react";

export default function useOrientation(): { isRotated: boolean } {
  const screenOrientation = window.innerWidth > window.innerHeight;
  const [isRotated, setIsRotated] = useState<boolean>(screenOrientation);

  useEffect(() => {
    if (!window) return;
    function handleOrientationChange(ev) {
      setIsRotated(ev.target.orientation !== 0);
    }

    window.addEventListener("orientationchange", handleOrientationChange);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [window]);

  return {
    isRotated,
  };
}
