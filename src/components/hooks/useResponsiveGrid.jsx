import { useState, useEffect, useContext, useCallback } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function useResponsiveGrid(
  breaks = [6, 5, 4, 3, 2],
  reduceAmount = 1,
  size = "minmax(0, 1fr)"
) {
  const { isSidebarOpen } = useContext(AppContext);
  const [gridCols, setGridCol] = useState(0);
  const cols =
    isSidebarOpen && window.innerWidth <= 1920
      ? gridCols - reduceAmount
      : gridCols;

  const onResize = useCallback(() => {
    const width = window.innerWidth;

    setGridCol(() => {
      if (width >= 1880) return breaks[0];
      else if (width >= 1580) return breaks[1];
      else if (width >= 1280) return breaks[2];
      else if (width >= 980) return breaks[3];
      else return breaks[4];
    });
  }, [breaks]);

  useEffect(onResize, [onResize]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return {
    cols,
    style: {
      gridTemplateColumns: `repeat(${cols}, ${size})`,
    },
  };
}
