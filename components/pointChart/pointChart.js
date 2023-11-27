import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ScatterPlot = ({ xAxisTitles, xAxisValue }) => {
  const chartRef = useRef(null);
  let myChart = useRef(null); // Reference to the chart instance

  useEffect(() => {
    const xaxisTitles = xAxisTitles;
    const points = xAxisValue;

    const filteredPoints = points.map((value) => (value === 0 ? null : value));

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the previous chart instance if it exists
      if (myChart.current) {
        myChart.current.destroy();
      }
      // ... (other code remains unchanged)

      myChart.current = new Chart(ctx, {
        type: "scatter",
        data: {
          labels: xaxisTitles,
          datasets: [
            {
              data: filteredPoints,
              pointBackgroundColor: "#FF6504",
              pointBorderColor: "#FF6504",
              pointRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: "category",
              title: {
                display: false,
              },
              ticks: {
                display: true,
              },
              grid: {
                display: false,
              },
              lineWidth: 2,
              // Set the color for the x-axis baseline
              color: "red", // Change this to the desired color for the x-axis baseline
            },
            y: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      // ... (other code remains unchanged)
    }
  }, [xAxisTitles, xAxisValue]);

  return (
    <div style={{ width: "100%", maxWidth: "700px", height: "80px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ScatterPlot;
