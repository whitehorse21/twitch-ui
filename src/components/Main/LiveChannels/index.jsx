import { useState } from "react";
import useResponsiveGrid from "../../hooks/useResponsiveGrid";
import { followedChannels } from "../../../data";
import Channel from "./Channel";
import ShowMore from "../ShowMore";

export default function LiveChannels() {
  const [showMore, setShowMore] = useState(false);
  const { cols, style } = useResponsiveGrid([6, 5, 4, 3, 2]);

  return (
    <>
      <div className="grid gap-[20px_10px]" style={style}>
        {followedChannels
          .slice(0, showMore ? cols * 2 : cols)
          .map((channel, index) => (
            <Channel key={index} channel={channel} />
          ))}
      </div>
      <ShowMore showMore={showMore} setShowMore={setShowMore} />
    </>
  );
}
