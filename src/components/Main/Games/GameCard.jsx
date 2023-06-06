import HoverEffect from "../../HoverEffect";
import Title from "../LiveChannels/Title";
import OptionsBtn from "../LiveChannels/OptionsBtn";
import Marker from "../../Marker";
import { getViewersFormatted } from "../../../utils";

export default function CategoryCard(props) {
  const { name, image, viewers, tags } = props.game;

  return (
    <div>
      <HoverEffect pb="133.32%">
        <img
          className="w-full h-full overflow-hidden object-cover"
          src={image}
          alt={name}
        />
      </HoverEffect>
      <div className="flex mt-[6px]">
        <div className="flex-1 font-inter overflow-hidden">
          <Title title={name} bold />

          <div className="mt-[-3px]">
            <a
              className="text-[13px] text-livechannel-subtitle-color hover:text-purple"
              href="/#"
            >
              {getViewersFormatted(viewers)} viewers
            </a>
          </div>

          <div className="flex gap-[5px] mt-[6px]">
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
