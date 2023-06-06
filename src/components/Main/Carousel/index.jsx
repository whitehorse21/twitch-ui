import { useCallback, useEffect, useMemo, useState } from "react";
import { followedChannels } from "../../../data";
import CarouselBtn from "./CarouselBtn";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const carouselData = useMemo(() => followedChannels.slice(0, 10), []);
  const [firstInteraction, setFirstInteraction] = useState(false);
  const [centralItem, setCentralItem] = useState(0);
  const [showItems, setShowItems] = useState([]);

  const updateSideItems = useCallback(() => {
    const array = [];
    const amount = 3;
    let negative = 0;
    let positive = 0;

    for (let i = 1; i <= amount; i++) {
      if (centralItem - i >= 0) {
        array.unshift(centralItem - i);
      } else {
        array.unshift(carouselData.length - (negative + 1));
        negative++;
      }
    }

    array.push(centralItem);

    for (let i = 1; i <= amount; i++) {
      if (centralItem + i <= carouselData.length - 1) {
        array.push(centralItem + i);
      } else {
        array.push(positive);
        positive++;
      }
    }

    setShowItems(array);
  }, [carouselData, centralItem]);

  const manualUpdateCenterItem = useCallback(
    (value) => {
      if (!firstInteraction && centralItem !== value) setFirstInteraction(true);
      setCentralItem(value);
      updateSideItems();
    },
    [
      firstInteraction,
      setFirstInteraction,
      centralItem,
      setCentralItem,
      updateSideItems,
    ]
  );

  const updateCentralItem = useCallback(
    (value) => {
      if (!firstInteraction && centralItem !== value) setFirstInteraction(true);
      setCentralItem((current) => {
        if (current + value < 0) return carouselData.length - 1;
        else if (current + value >= carouselData.length) return 0;
        return current + value;
      });

      updateSideItems();
    },
    [centralItem, updateSideItems, carouselData.length, firstInteraction]
  );

  useEffect(updateSideItems, [updateSideItems]);

  return (
    <div className="h-[300px] w-full relative">
      <CarouselBtn left onClick={() => updateCentralItem(-1)}>
        <svg
          width="24px"
          height="24px"
          fill="currentColor"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path d="M13.5 14.5L9 10l4.5-4.5L12 4l-6 6 6 6 1.5-1.5z"></path>
          </g>
        </svg>
      </CarouselBtn>

      {showItems.length ? (
        carouselData.map((channel, index) => (
          <CarouselItem
            key={index}
            index={index}
            channel={channel}
            showItems={showItems}
            centralItem={centralItem}
            firstInteraction={firstInteraction}
            manualUpdateCenterItem={() => manualUpdateCenterItem(index)}
          />
        ))
      ) : (
        <div
          className="flex w-[750px] h-[300px] absolute top-[50%] left-[50%] 
          shadow-lg transform translate-x-[-50%] translate-y-[-50%] bg-gray-200
          dark:bg-neutral-800"
        ></div>
      )}

      <CarouselBtn right onClick={() => updateCentralItem(1)}>
        <svg
          width="24px"
          height="24px"
          fill="currentColor"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <g>
            <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
          </g>
        </svg>
      </CarouselBtn>
    </div>
  );
}

export default Carousel;
