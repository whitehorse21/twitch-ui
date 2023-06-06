import NavLeft from "./NavLeft";
import NavInput from "./NavInput";
import NavRight from "./NavRight";

function NavBar() {
  return (
    <div
      className="flex justify-between h-[50px] bg-navbar-bg-color text-base-text-color 
      font-semibold text-lg leading-tight font-roobert shadow-md"
    >
      <NavLeft />
      <NavInput />
      <NavRight />
    </div>
  );
}

export default NavBar;
