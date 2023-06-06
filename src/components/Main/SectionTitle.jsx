export default function SectionTitle({
  title = ["section title", "not provided"],
  href = "#/",
}) {
  const [firstHalf, secondHalf] = title;

  return (
    <div className="mb-2">
      <span className="text-base-text-color font-roobert font-semibold text-[18px]">
        {firstHalf && (
          <>
            <a href={href} className="text-purple hover:underline">
              {firstHalf}
            </a>{" "}
          </>
        )}
        {secondHalf}
      </span>
    </div>
  );
}
