function DropdownButton({ label, href = "/#", children, arrow = false }) {
  return (
    <a
      href={href}
      className="flex items-center p-[5px] rounded hover:bg-opac-01 active:bg-opac-015"
    >
      {children}
      <span className="text-[13px] font-inter font-normal pl-[5px] mt-[-1px]">
        {label}
      </span>
      {arrow && (
        <span className="inline-block ml-auto">
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
              <path d="M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>
            </g>
          </svg>
        </span>
      )}
    </a>
  );
}

export default DropdownButton;
