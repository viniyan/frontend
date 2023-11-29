import { useHover } from "@uidotdev/usehooks";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

const ChartPoint = ({
  value,
  length,
  label1,
  label2,
  gap,
  author,
  is_commit_count,
  raw,
}) => {
  const position = value.value / gap;
  const [ref, hovering] = useHover();
  const [commit_count, setCommit_count] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (author) {
      (async function () {
        try {
          const data = await axios.get(
            `https://xtvt-0cf34a19b55e.herokuapp.com/authors/${author}/${moment(
              raw
            ).format("YYYY-MM-DD")}/commits`
          );
          setCommit_count(data.data.data.commit_count);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [author]);

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
                <p>
                  {is_commit_count
                    ? isLoading
                      ? "Loading"
                      : "Commit count: " + commit_count
                    : label1}
                </p>
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
