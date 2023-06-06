function NavInput() {
  return (
    <div className="w-[400px] p-[5px] h-full mr-[-12px]">
      <div className="flex items-center h-full">
        <input
          className="px-[10px] py-[5px] flex-1 h-[36px] rounded-l-md bg-input-bg-color 
          bg-clip-padding text-sm border-[2px] border-input-border-color font-inter
          hover:border-input-border-color-hover outline-none text-input-text-color
          font-normal placeholder:text-slate-500 dark:placeholder:text-gray-300
          focus:bg-input-bg-color-focus focus:border-input-border-color-focus"
          type="text"
          placeholder="Search"
        />
        <button
          className=" flex items-center justify-center ml-[1px] rounded-r-md w-[34px]
          h-[36px] bg-search-button-bg-color hover:bg-search-button-bg-color-hover active:bg-search-button-bg-color-active"
          style={{
            cursor: "not-allowed",
          }}
        >
          <span className="sr-only">Search</span>
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
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavInput;
