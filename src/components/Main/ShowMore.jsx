import Dash from "./Dash";

export default function ShowMore({ showMore, setShowMore }) {
  return (
    <div>
      {!showMore ? (
        <div className="flex mb-[17px] mt-[13px]">
          <div className="flex-1">
            <Dash />
          </div>
          <button
            className="flex justify-center items-center mx-[10px] px-[10px] h-[30px]
            font-inter text-[13px] font-semibold text-purple hover:text-base-text-color
            hover:bg-showmore-hover-bg active:bg-showmore-active-bg rounded-[4px]"
            onClick={setShowMore}
          >
            Show more
            <svg
              className="ml-[5px]"
              fill="currentColor"
              width="20px"
              height="20px"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
            >
              <g>
                <path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
              </g>
            </svg>
          </button>
          <div className="flex-1">
            <Dash />
          </div>
        </div>
      ) : (
        <div className="mt-[4px] mb-[18px]">
          <Dash />
        </div>
      )}
    </div>
  );
}
