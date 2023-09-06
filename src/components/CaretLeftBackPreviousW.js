import { useMemo } from "react";

const CaretLeftBackPreviousW = ({
  caretLeftBackPreviousWCar,
  caretLeftBackPreviousWFlexShrink,
}) => {
  const caretLeftBackPreviousWStyle = useMemo(() => {
    return {
      flexShrink: caretLeftBackPreviousWFlexShrink,
    };
  }, [caretLeftBackPreviousWFlexShrink]);

  return (
    <img
      className="relative w-14 h-14 overflow-hidden"
      alt=""
      src={caretLeftBackPreviousWCar}
      style={caretLeftBackPreviousWStyle}
    />
  );
};

export default CaretLeftBackPreviousW;
