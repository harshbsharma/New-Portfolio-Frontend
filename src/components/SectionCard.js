import ContactFormContainer from "./ContactFormContainer";
import Modals from "./Modals";
import EntryForm from "./EntryForm";

const SectionCard = () => {
  return (
    <div className="absolute top-[3680px]  w-full flex flex-col py-16 px-10
    box-border items-center justify-start text-center text-45xl text-darkslategray font-eczar">
      
      
      {/* <div className="flex flex-row items-end justify-evenly gap-[34px]">
        
        
        <div className="flex flex-col items-start justify-evenly gap-[56px]">

            <div className="relative tracking-[0.02em] leading-[125%] font-semibold inline-block w-[892px]">
              Let’s work together and make everything super cute and super useful.
            </div>
            <ContactFormContainer />
            <Modals/>
        </div>


        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img className="relative w-8 h-8" alt="" src="/dribbble.svg" />
          <img className="relative w-8 h-8" alt="" src="/instagram.svg" />
          <img className="relative w-8 h-8" alt="" src="/pinterest.svg" />
          <img className="relative w-8 h-8" alt="" src="/linkedin.svg" />
        </div>


      </div> */}

            <div className="tracking-[0.02em] leading-[125%] font-normal  w-full">
              Let’s work together and make something big and super exciting.
            </div>
            <div className="mx-10 w-full">
                <EntryForm/>
            </div>

    </div>
  );
};

export default SectionCard;
