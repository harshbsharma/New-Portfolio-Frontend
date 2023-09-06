import { useMemo } from "react";

const Card = ({
  emptyStateImage,
  dashboardDescription,
  componentName,
  propPadding,
  propBoxSizing,
  propGap,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const maskGroupIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="rounded-3xl bg-seashell w-[1142px] flex flex-col items-end justify-start text-left text-13xl text-darkslategray font-work-sans"
      style={frameDivStyle}
    >
      <div
        className="flex flex-row items-center justify-start gap-[76px]"
        style={frameDiv1Style}
      >
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative leading-[150%] font-semibold mb-3">
              {emptyStateImage}
            </div>
            <div className="relative text-5xl leading-[150%] font-medium text-dimgray-200 inline-block w-[404px]">
              {dashboardDescription}
            </div>
          </div>
          <button className="relative ml-20 text-5xl leading-[150%] bg-transparent cursor-pointer font-semibold text-slategray">
            View 
          </button>
        </div>
        <img
          className="relative w-[590px] h-[400px] object-cover"
          alt=""
          src={componentName}
          style={maskGroupIconStyle}
        />
      </div>
    </div>
  );
};

export default Card;
