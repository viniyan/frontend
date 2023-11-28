import { useHover } from "@uidotdev/usehooks";
import React from "react";

const ChartPoint = ({ value, length, label1, label2, gap }) => {
  const position = value.value / gap;
  const [ref, hovering] = useHover();

  return (
    <div
      style={{
        left: `calc((100% / ${length} ) * ${position})`,
        width: `calc(100% / ${length})`,
      }}
      className="chart-pointer"
    >
      <div ref={ref}>
        <span className="chart-dot"></span>
        <div className="tooltip">
          {hovering && (
            <div className="tooltip-wrapper">
              <div>
                <p>{label1}</p>
                <p>{label2}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartPoint;
