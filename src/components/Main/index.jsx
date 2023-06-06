import Carousel from "./Carousel";
import LiveChannels from "./LiveChannels";
import SectionTitle from "./SectionTitle";
import Games from "./Games";
import Categories from "./Categories";
import Footer from "./Footer";

function MainContent() {
  return (
    <main className="w-full h-full scrollbar overflow-y-scroll px-[30px]">
      <div className="mx-auto max-w-[2000px] pb-[30px]">
        <div className="flex items-center h-[340px] py-[20px]">
          <Carousel />
        </div>

        <div className="mt-[37px]">
          <SectionTitle title={["Live channels", "we think you’ll like"]} />
          <LiveChannels />
        </div>

        <div>
          <SectionTitle title={["Categories", "we think you’ll like"]} />
          <Games />
        </div>

        <div className="pb-[20px]">
          <Categories />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
