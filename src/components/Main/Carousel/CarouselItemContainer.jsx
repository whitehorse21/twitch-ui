export default function CarouselItemContainer({
  index,
  children,
  isCentral,
  showItems,
  manualUpdateCenterItem,
}) {
  function getStyle() {
    // center
    if (isCentral) return "w-[750px] h-[300px] left-[50%] z-[8]";
    const itemIndex = showItems.indexOf(index);

    // 2
    if (itemIndex === 2 || itemIndex === showItems.length - 3) {
      return (
        "w-[637px] h-[255px] z-[7] " +
        (itemIndex === 2 ? "left-[40%]" : "left-[60%]")
      );
    }

    // 3
    if (itemIndex === 1 || itemIndex === showItems.length - 2) {
      return (
        "w-[525px] h-[210px] z-[6] " +
        (itemIndex === 1 ? "left-[30%]" : "left-[70%]")
      );
    }

    // hidden
    if (itemIndex === 0 || itemIndex === showItems.length - 1) {
      return (
        "w-[400px] h-[169px] z-[5] opacity-0 pointer-events-none " +
        (itemIndex === 0 ? "left-[20%]" : "left-[80%]")
      );
    }

    return "h-[0px] w-[0px] left-[50%] opacity-0";
  }

  return (
    <div
      onClick={manualUpdateCenterItem}
      style={{
        transition:
          "left .6s, width .6s, height .6s, opacity .6s, transform .2s",
      }}
      className={`absolute top-[50%] shadow-lg transform translate-x-[-50%]
      translate-y-[-50%] cursor-pointer ${getStyle()} ${
        !isCentral && "group hover:scale-[1.025]"
      }`}
    >
      {children}
    </div>
  );
}
