import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { pieChartData } from "../data/piChartData";

function PieCharts() {
  const data = pieChartData();
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          
        },
      ]}
      margin={{ top: 0, bottom: 0, left: 0, right:150 }}
      slotProps={{
        legend: {
          labelStyle: {
        fontSize: 14,
        fill: 'blue',
      },
          direction: "column",
          position: { vertical: "center", horizontal: "right" },
          padding: "100px 100 10 0",
          itemMarkWidth: 5,
          itemMarkHeight: 5,
          markGap: 5,
          itemGap: 1.5,
        },
      }}
    />
  );
}

export default PieCharts;
