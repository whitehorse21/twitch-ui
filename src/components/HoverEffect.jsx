export default function HoverEffect({ children, color = "#9147ff", pb }) {
  return (
    <div
      className="group relative w-full cursor-pointer"
      style={{ paddingBottom: pb }}
    >
      {/* Bottom */}
      <div
        className="absolute bottom-0 h-[6px] w-full z-[1]"
        style={{ background: color }}
      ></div>
      {/* Left */}
      <div
        className="absolute left-0 h-full w-[6px] z-[1]"
        style={{ background: color }}
      ></div>
      {/* Top left corner */}
      <div
        className="absolute top-0 left-0 h-[6px] w-[6.5px] z-[1]
        group-hover:top-[-6px] transition-[top] duration-150"
        style={{
          background: color,
          clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
        }}
      ></div>
      {/* Bottom right corner */}
      <div
        className="absolute bottom-0 right-0 h-[6px] w-[6px] z-[1]
        group-hover:right-[-6px] transition-[right] duration-150"
        style={{
          background: color,
          clipPath: "polygon(100% 0, 0 100%, 0 0)",
        }}
      ></div>

      <div
        className="absolute inset-0 z-[2] transform group-hover:translate-x-[6px] 
        group-hover:translate-y-[-6px] transition-[transform] duration-100
        ease-linear"
      >
        {children}
      </div>
    </div>
  );
}
