import ContactFormContainer from "./ContactFormContainer";

const AboutMeSection = () => {
  return (
    <div className="absolute top-[3009px] left-[0px] bg-peachpuff-100 w-full flex flex-col py-0 px-[120px]
                     box-border items-center justify-center text-left text-21xl text-darkslategray
                         font-eczar">
      <div className="w-[1123px] flex flex-row py-0 pr-0  pl-6 box-border items-center justify-start gap-[108px]">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[0.02em] leading-[125%] font-semibold">
              A Little Bit About Me
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px] text-xl text-dimgray-200 font-work-sans">
              <div className="relative leading-[150%] font-medium inline-block w-[460px]">
                I am Salman Khan from Lucknow, India. I am working in an Indian
                Startup as a User Eperience Designer for the past two years.
              </div>
              <div className="relative leading-[150%] font-medium inline-block w-[460px]">
                <p className="m-0">
                  I got featured various times on many big and small
                  marketplaces, portfolio websites and blogs. I also received
                  some awards and recognitions from some of the big and small
                  award companies.
                </p>
                <p className="m-0">
                  Besides designing, I like to watch anime, read books and solve
                  sudoku.
                </p>
              </div>
            </div>
          </div>
          <ContactFormContainer />
        </div>

        <div className="mt-7">


          <img
            className="relative w-[556px] h-[650px] object-cover border-transparent rounded-3xl"
            alt=""
            src="/programmer.jpg"
          />


        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
