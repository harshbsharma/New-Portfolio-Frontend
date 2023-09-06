import Card from "./Card";

const RecentWorkSection = () => {
  return (
    <div className="absolute top-[768px] left-[0px] flex flex-row py-[88px]  w-full items-center justify-center text-left text-21xl text-darkslategray font-eczar">
      <div className="flex flex-col w-full items-center bg-peachpuff-200 justify-center gap-[35px]">

          <div className="flex flex-row p-2 font-semibold mt-10 ">
            My Recent Work
            {/* <div className="relative tracking-[0.02em] leading-[125%] font-semibold">
              My Recent Work
            </div> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-[28px] mb-20 text-13xl font-work-sans">
            <Card
              emptyStateImage="Sheepify States"
              dashboardDescription="Designed some empty state screens in kawaii style for the popular sheepify app "
              componentName="/mask-group@2x.png"
            />
            <Card
              emptyStateImage="HoneyBunny"
              dashboardDescription="A colorful dashboard to manage your fictional projects and team, all in a single place."
              componentName="/home-1@2x.png"
              
            />
            <Card
              emptyStateImage="Memrise Redesign"
              dashboardDescription="I redesigned the popular language learning app memrise in kawaii style to make it more cute."
              componentName="/mask-group1@2x.png"
              // propPadding="unset"
              // propBoxSizing="unset"
              // propGap="76px"
              // propWidth="590px"
              // propHeight="400px"
            />
          </div>
      </div>
    </div>
  );
};

export default RecentWorkSection;
