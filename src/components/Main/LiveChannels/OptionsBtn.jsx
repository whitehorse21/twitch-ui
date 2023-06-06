export default function OptionsBtn() {
  return (
    <button
      className="flex items-center justify-center w-[24px] h-[24px]
      rounded-[2px] hover:bg-tag-hover-bg active:bg-tag-active-bg"
    >
      <svg
        width="16px"
        height="16px"
        className="fill-base-text-color"
        version="1.1"
        viewBox="0 0 20 20"
        x="0px"
        y="0px"
      >
        <g>
          <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
        </g>
      </svg>
    </button>
  );
}
