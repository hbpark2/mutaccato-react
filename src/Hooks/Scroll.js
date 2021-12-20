import { useState, useEffect } from "react";
import { throttle } from "lodash";
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let mounted = true;

    window.addEventListener(
      "scroll",
      throttle(() => {
        if (mounted) {
          setScrollY(window.pageYOffset);
        }
      }, 300)
    );

    return () => {
      mounted = false;
    };
  }, []);

  return {
    scrollY,
  };
}
