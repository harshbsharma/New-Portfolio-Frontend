import CaretLeftBackPreviousW from "./CaretLeftBackPreviousW";
import CaretRightNextFrontEas from "./CaretRightNextFrontEas";

const GenerousWordsSection = () => {
  return (
    <div className="absolute w-full top-[2362px] pt-6 px-2 pb-20 box-border
                   items-center justify-center text-darkslategray font-eczar
                   ">
      {/* <div className="flex flex-col items-center justify-start gap-[96px]">
        <div className="flex flex-col items-center justify-start gap-[8px]">
          <div className="relative tracking-[0.02em] leading-[125%] font-semibold">
            Some Generous Words
          </div>
          <div className="relative text-xl leading-[150%] font-medium font-work-sans text-dimgray-200 text-center inline-block w-[784px]">
            Some of my favorite testimonials from my clients
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[94px] text-center text-xl text-dimgray-200 font-work-sans">
          <CaretLeftBackPreviousW
            caretLeftBackPreviousWCar="/-caret-left-back-previous-west.svg"
            caretLeftBackPreviousWFlexShrink="0"
          />
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="w-[460px] flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[150%] inline-block w-[391px]">
                I had grown a little bit disappointed when I realized that my
                work would not be taking me in any new, creative design
                directions. Thankfully, I found Salman Khan and his creativity
                that goes above and beyond, proving to be exactly what I needed
                to take.
              </div>
              <b className="relative leading-[25px] inline-block w-[361px]">
                Aika Chan
              </b>
            </div>
            <div className="w-[460px] flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[150%] inline-block w-[391px]">
                Salman Khan is the best designer that I have ever worked with.
                He is seriously what you would call 'creative': he innovatively
                solves all sorts of problems and always delivers both prompt and
                high quality work. I can't recommend him enough!
              </div>
              <b className="relative leading-[25px] inline-block w-[361px]">
                Arakan Chan
              </b>
            </div>
          </div>
          <CaretRightNextFrontEas
            caretRightNextFrontEasCar="/-caret-right-next-front-east.svg"
            caretRightNextFrontEasFlexShrink="0"
          />
        </div>
      </div> */}

  {/* <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24">
  
  </div>  
  <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
  <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
  <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div> */}

  <div className="container mx-auto pl-12 pr-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/github.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/node.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/javascript.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/tailwind.png"
    />



  </div>

  <div className="container mx-auto pl-12 pr-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/aws.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/redux2.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/mongodb.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/sql-server.png"
    />



  </div>

  <div className="container mx-auto pl-12 pr-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/express.png"
    />
    <img
        className="w-[204px] pt-2 h-[180px]"
        alt=""
        src="/html.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/netlify.png"
    />
    <img
        className="w-[204px] h-[200px]"
        alt=""
        src="/sql-server.png"
    />



  </div>          






    </div>
  );
};

export default GenerousWordsSection;
