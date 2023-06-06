import { getViewersFormatted } from "../../utils";

function Channel({ channel, expanded = false }) {
  const { user, game, viewers, avatar } = channel;

  return (
    <a
      href="/#"
      className={`flex px-[10px] py-[5px] ${
        expanded && "hover:bg-sidebar-channel-hover"
      }`}
    >
      <div>
        <img
          className="w-[30px] h-[30px] rounded-full"
          src={
            avatar ||
            "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-70x70.png"
          }
          alt={user}
        />
      </div>

      {expanded && (
        <div className="flex flex-1">
          <div className="flex-1 flex justify-center flex-col leading-[1] ml-[10px] mt-[-2px]">
            <span className="font-inter text-title font-semibold text-[14px] leading-[1.2]">
              {user}
            </span>
            <span className="text-subtitle text-[14px] leading-[1.2]">
              {game}
            </span>
          </div>

          <div className="flex items-start">
            <span
              className="flex items-center text-sidebar-view-count text-[13px] font-inter
              font-normal mt-[-2px]"
            >
              <span
                className="inline-block w-[8px] h-[8px] bg-red-600 rounded 
                mr-[5px]"
              ></span>
              {getViewersFormatted(viewers)}
            </span>
          </div>
        </div>
      )}
    </a>
  );
}

export default Channel;
