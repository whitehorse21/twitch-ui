export default function LiveTag({ top = "10px", left = "10px" }) {
  return (
    <div
      className={`absolute font-inter text-[13px] bg-live-bg-color 
      font-semibold text-white rounded-[4px] px-[5px] select-none
      top-[${top}] left-[${left}]`}
    >
      LIVE
    </div>
  );
}
