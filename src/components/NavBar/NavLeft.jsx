import NavButton from "./NavButton";

function NavLeft() {
  return (
    <div className="flex">
      <div className="p-[5px]">
        <a href="/#">
          <span className="sr-only">Twitch Homepage</span>
          <svg
            width="40px"
            height="40px"
            version="1.1"
            viewBox="0 0 40 40"
            x="0px"
            y="0px"
          >
            <g>
              <polygon
                className="fill-[#9147ff]"
                points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
              ></polygon>
              <polygon
                className="fill-white"
                points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25"
              ></polygon>
              <g>
                <path
                  className="fill-[#9147ff]"
                  d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div className="flex items-center h-full px-[20px] laptop:text-sm laptop:px-[10px] pb-[2px] ">
        <a
          href="/#"
          className="h-full flex items-center hover:text-purple active:text-purple"
        >
          Following
        </a>
      </div>
      <div className="flex items-center h-full px-[20px] laptop:text-sm laptop:px-[10px] pb-[2px]">
        <a
          href="/#"
          className="h-full flex items-center hover:text-purple active:text-purple"
        >
          Browse
        </a>
      </div>
      <div className="flex items-center h-full w-[50px] px-[10px]">
        <NavButton
          className="flex justify-center items-center h-[30px] 
          w-[30px] rounded hover:bg-opac-01 active:bg-opac-015"
          sralt="More"
        >
          <svg
            width="20px"
            height="20px"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            fill="currentColor"
          >
            <g>
              <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
            </g>
          </svg>
        </NavButton>
      </div>
    </div>
  );
}

export default NavLeft;
