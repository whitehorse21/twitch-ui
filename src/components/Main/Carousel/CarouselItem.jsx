import { getViewersFormatted } from "../../../utils";
import LiveTag from "../../LiveTag";
import Marker from "../../Marker";
import CarouselItemContainer from "./CarouselItemContainer";

function CarouselItem({
  index,
  channel,
  showItems,
  centralItem,
  firstInteraction,
  manualUpdateCenterItem,
}) {
  const {
    user,
    game,
    viewers,
    tags,
    avatar,
    live_preview_image = "/assets/404_preview.jpg",
  } = channel;
  const isCentral = index === centralItem;

  return (
    <CarouselItemContainer
      index={index}
      isCentral={isCentral}
      showItems={showItems}
      manualUpdateCenterItem={manualUpdateCenterItem}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.4)] 
          group-hover:bg-transparent transition-all duration-200"
        ></div>
        <img
          className="h-full w-full object-cover"
          src={live_preview_image}
          alt="Live Preview"
        />
      </div>

      {isCentral && (
        <div
          className={`absolute inset-0 flex h-full ${
            firstInteraction && "opacity-0 animate-fadeIn"
          }
        `}
        >
          {/* "player" */}
          <div
            className="relative h-full bg-black cursor-pointer w-[530px] 
            transition-[width] duration-[0s] delay-[700ms]"
          >
            <LiveTag />

            <img
              className="h-full w-full object-cover"
              src={live_preview_image}
              alt="Live Preview"
            />
          </div>

          {/* channel infos */}
          <div className="w-[220px] bg-carousel-item-bg">
            <div className="w-full h-full p-[10px] space-y-[10px]">
              <div className="flex">
                <div>
                  <img
                    className="w-[50px] h-50px rounded-full"
                    src={avatar}
                    alt={user}
                  />
                </div>

                <div className="ml-[10px] text-[13px]">
                  <a
                    href="/#"
                    className="block text-purple font-inter font-semibold hover:underline"
                  >
                    {user}
                  </a>
                  <a
                    href="/#"
                    className="block text-purple font-inter hover:underline"
                  >
                    {game}
                  </a>
                  <span className="block font-inter text-carousel-text-color">
                    {getViewersFormatted(viewers)} viewers
                  </span>
                </div>
              </div>

              <div className="flex">
                {tags.map((tag, index) => (
                  <Marker key={index} tag={tag} />
                ))}
              </div>

              <p className="font-inter text-[13px] text-carousel-text-color">
                {user} is live! Come hang out in chat.
              </p>
            </div>
          </div>
        </div>
      )}
    </CarouselItemContainer>
  );
}

export default CarouselItem;
