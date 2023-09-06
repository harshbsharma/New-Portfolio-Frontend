import AboutMeSection from "../components/AboutMeSection";
import SectionCard from "../components/SectionCard";
import RecentWorkSection from "../components/RecentWorkSection";
import GenerousWordsSection from "../components/GenerousWordsSection";

const One = () => {
  return (
    <div className="relative bg-antiquewhite w-full h-[4490px] overflow-hidden flex flex-col 
                    items-center justify-center text-left text-5xl text-darkslategray font-work-sans">
        
        
          <nav
            className="m-0 absolute top-[32px] left-[440px] flex flex-row items-start justify-start gap-[32px] text-left text-xl text-dimgray-200 font-work-sans"
            id="navbar"
          >
            <div className="relative leading-[150%] font-semibold">Home</div>
            <div className="relative leading-[150%] font-semibold">Work</div>
            <div className="relative leading-[150%] font-semibold">
              Testimonials
            </div>
            <div className="relative leading-[150%] font-semibold">About</div>
          </nav>
    

        <div className="flex flex-row">
            <div className="absolute top-[174px] left-[80px] flex flex-col items-startjustify-start gap-[40px]">

              <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="rounded-[10px] bg-peachpuff-100 flex flex-row py-3 px-6 items-center justify-center">
                    <div className="relative leading-[150%] font-semibold">
                      👋 Hello All
                    </div>
                  </div>
                  <p className="m-0 relative text-45xl tracking-[0.02em] leading-[125%] font-semibold font-eczar">
                    <span className="block">I’m Harsh Sharma,</span>
                    <span className="block">A Creative Designer</span>
                    <span className="block">and Storyteller</span>
                  </p>
              </div>

            

              
              <div className="flex flex-row items-start justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] py-6 px-10 bg-slategray 
                                    hover:bg-transparent hover:border-[4px] hover:border-solid
                                  hover:border-dimgray-100  hover:text-dimgray-100 rounded-2xl w-[270px] h-[88px]  
                                    flex flex-col box-border items-center justify-center">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <div className="relative w-full h-full text-5xl leading-[150%] 
                                      font-semibold font-work-sans text-ghostwhite hover:text-dimgray-100  text-left">
                        View My Work
                      </div>
                      {/* <img
                        className="relative w-6 h-6"
                        alt=""
                        src="/chevronrightsquare.svg"
                      /> */}
                    </div>
                  </button>
                  <button className="cursor-pointer py-6 px-10 bg-[transparent] rounded-2xl box-border w-[269px] flex flex-col items-center justify-center border-[4px] border-solid border-dimgray-100">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative text-5xl leading-[150%] font-semibold font-work-sans text-dimgray-100 text-left">
                        Contact Me
                      </div>
                    </div>
                  </button>
              </div>


            </div>
            
            <img
              className="absolute top-[108px] left-[720px] w-[524px] h-[660px] object-cover"
              alt=""
              src="/mainimage@2x.png"
            />
        </div>
        <RecentWorkSection />
        <AboutMeSection />
        <GenerousWordsSection />
        <SectionCard />
        
    </div>
  );
};

export default One;
