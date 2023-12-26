import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { intensityData } from "../data/intensityData";

export default function IntensityLineChart() {
  const intensity = intensityData();
  // console.log(intensity);
  return (
    <LineChart
      xAxis={[{ data: intensity.nameData }]}
      series={[
        {
          label: `Ocurrance of Intensity `,
          data: intensity.seriesData,
        },
      ]}
      width={500}
      height={400}
    />
  );
}
