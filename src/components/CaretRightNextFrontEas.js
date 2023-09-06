import { useMemo } from "react";

const CaretRightNextFrontEas = ({
  caretRightNextFrontEasCar,
  caretRightNextFrontEasFlexShrink,
}) => {
  const caretRightNextFrontEasStyle = useMemo(() => {
    return {
      flexShrink: caretRightNextFrontEasFlexShrink,
    };
  }, [caretRightNextFrontEasFlexShrink]);

  return (
    <img
      className="relative w-14 h-14 overflow-hidden"
      alt=""
      src={caretRightNextFrontEasCar}
      style={caretRightNextFrontEasStyle}
    />
  );
};

export default CaretRightNextFrontEas;
