export default function Title({ title, bold }) {
  return (
    <div className="mb-[2px]">
      <a
        title={title}
        className={`block mt-[-1px] text-[14px] text-livechannel-title-color
        hover:text-purple truncate ${bold ? "font-bold" : "font-semibold"}`}
        href="/#"
      >
        {title || "title not provided"}
      </a>
    </div>
  );
}
