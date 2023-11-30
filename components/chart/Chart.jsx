"use client";
import ChartPoint from "./ChartPoint";
import React from "react";

const Chart = ({ rows, data, gap, author, is_commit_count }) => {
  console.log(data);
  return (
    <div className="chart-wrapper">
      <div className="chart">
        <div className="labels-wrapper">
          {rows.map((value, i, arr) => {
            return (
              <p
                className="row-labels"
                style={{ width: `calc(100% / ${arr.length})` }}
                key={"a" + i}
              >
                {value}
              </p>
            );
          })}
        </div>

        {data.map((value, i) => {
          return (
            <ChartPoint
              length={rows.length}
              key={"a" + i}
              value={value}
              label1={value.label1}
              label2={value.label2}
              gap={gap}
              author={author}
              raw={value.raw}
              is_commit_count={is_commit_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
