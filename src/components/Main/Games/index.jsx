import { useState } from "react";
import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { games } from "../../../data";
import GameCard from "./GameCard";
import ShowMore from "../ShowMore";

export default function Games() {
  const [showMore, setShowMore] = useState(false);
  const { cols, style } = useResponsiveGrid([12, 10, 8, 6, 4], 2);

  return (
    <>
      <div className="grid gap-[20px_10px] mt-[-1px] mb-[2px]" style={style}>
        {games.slice(0, !showMore ? cols : cols * 2).map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
      <ShowMore
        showMore={showMore}
        setShowMore={() => setShowMore((current) => !current)}
      />
    </>
  );
}
