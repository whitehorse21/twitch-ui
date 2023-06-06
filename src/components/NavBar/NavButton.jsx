function NavButton({ sralt = "", children, onClick = () => false }) {
  return (
    <button
      className="flex justify-center items-center h-[30px] 
      w-[30px] rounded hover:bg-opac-01 active:bg-opac-015"
      title={sralt}
      onClick={onClick}
    >
      <span className="sr-only">{sralt}</span>
      {children}
    </button>
  );
}

export default NavButton;
