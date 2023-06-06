export default function ChannelTag({ tag, href = "/#", large = false }) {
  return (
    <a
      href={href}
      className={`inline-block font-inter font-semibold text-[12px]
      text-tag-text-color rounded-full hover:bg-tag-hover-bg bg-tag-bg-color
      ${large ? "px-[10px] py-[1px]" : "px-2"}`}
    >
      {tag}
    </a>
  );
}
