import { categories } from "../../../data";

export default function Categories() {
  return (
    <div className="grid gap-2 grid-cols-5 mt-[20px] px-[2px] pt-[2px]">
      {categories.map(({ name, image }, index) => (
        <a
          key={index}
          href="/#"
          className="group relative h-[45px] bg-category-bg 
          rounded-[5px] cursor-pointer"
        >
          <div
            className="w-full h-full flex items-center 
            group-hover:bg-category-anchor-hover
            group-active:bg-category-anchor-active"
          >
            <span
              className="font-inter text-[24px] font-semibold 
              leading-[22px] ml-[15px] text-white"
            >
              {name}
            </span>
          </div>
          <img
            src={image}
            alt={name}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </a>
      ))}
    </div>
  );
}
