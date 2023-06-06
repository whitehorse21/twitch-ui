import HoverEffect from "../../HoverEffect";
import LiveTag from "../../LiveTag";
import Marker from "../../Marker";
import Title from "./Title";
import OptionsBtn from "./OptionsBtn";
import { getViewersFormatted } from "../../../utils";

export default function Channel({ channel }) {
  const {
    user,
    game,
    viewers,
    title,
    tags,
    avatar,
    color,
    live_preview_image,
  } = channel;

  return (
    <div>
      <HoverEffect color={color} pb="56.36%">
        <div className="bg-black dark:bg-[#222] w-full h-full">
          <LiveTag />
          <img
            className="h-full w-full object-cover"
            src={live_preview_image || "/assets/404_preview.jpg"}
            alt="Live Preview"
          />
          <span
            className="absolute bottom-[10px] left-[10px] font-inter px-1
            text-white text-[13px] bg-livechannel-viewer-count-bg rounded-[4px]
            select-none"
          >
            {getViewersFormatted(viewers)} viewers
          </span>
        </div>
      </HoverEffect>

      <div className="flex mt-[9px]">
        <div className="mr-[10px]">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={avatar}
            alt={user}
          />
        </div>

        <div className="flex-1 font-inter overflow-hidden">
          <Title title={title} />
          <div>
            <a
              className="block text-[13px] text-livechannel-subtitle-color"
              href="/#"
            >
              {user}
            </a>
          </div>
          <div className="leading-[13px]">
            <div className="mt-[2px]">
              <a
                className="inline-block text-[13px] text-livechannel-subtitle-color 
                hover:text-purple"
                href="/#"
              >
                {game}
              </a>
            </div>
          </div>
          <div className="flex mt-[10px]">
            {tags.map((tag, index) => (
              <Marker key={index} tag={tag} large />
            ))}
          </div>
        </div>

        <div>
          <OptionsBtn />
        </div>
      </div>
    </div>
  );
}
