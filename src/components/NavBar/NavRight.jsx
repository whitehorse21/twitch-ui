import { useState, useRef, useEffect } from "react";
import NavButton from "./NavButton";
import UserDropdown from "../UserDropdown";

function NavRight() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownBtnRef = useRef(null);

  useEffect(() => {
    const dropdownEl = dropdownRef.current;
    const dropdownBtnEl = dropdownBtnRef.current;

    function dropdownClickListener(event) {
      if (
        dropdownEl?.contains(event.target) ||
        dropdownBtnEl.contains(event.target)
      ) {
        // do nothing, click was inside container
        console.log("click inside");
      } else {
        // hide autocomplete, click was outside container.
        console.log("click outside");
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      window.addEventListener("click", dropdownClickListener);
    }

    return () => window.removeEventListener("click", dropdownClickListener);
  }, [showDropdown]);

  return (
    <div className="flex items-center mr-[10px] relative">
      <div className="flex space-x-[10px] mr-[10px]">
        <NavButton sralt="New Prime Loot">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path>
            </g>
          </svg>
        </NavButton>
        <NavButton sralt="Notifications">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z"></path>
            </g>
          </svg>
        </NavButton>
        <NavButton sralt="Whispers">
          <svg
            width="20px"
            height="20px"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z"></path>
            </g>
          </svg>
        </NavButton>
      </div>

      <button
        className="flex items-center h-[30px] text-[13px] pl-2 pr-[10px] mr-[10px]
        rounded font-inter bg-opac-005 hover:bg-opac-01 active:bg-opac-015"
      >
        <svg
          width="20px"
          height="20px"
          fill="currentColor"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
        >
          <path
            fillRule="evenodd"
            d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
          ></path>
        </svg>
        <span className="ml-[5px] mt-[-2px]">Get Bits</span>
      </button>

      <button
        className="h-[30px] w-[30px]"
        onClick={() => setShowDropdown(!showDropdown)}
        ref={dropdownBtnRef}
      >
        <img
          className="rounded-full"
          src="/assets/avatar/user.png"
          alt="User"
        />
      </button>

      {showDropdown && <UserDropdown dropdownRef={dropdownRef} />}
    </div>
  );
}

export default NavRight;
