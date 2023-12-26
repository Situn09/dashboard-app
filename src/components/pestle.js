import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { pestleData } from "../data/pestleData";

export default function Pestle() {
  let pest = pestleData();
  // console.log(pest);

  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ['Ind.','Env.','Eco.','Politic','Tech.','NaN','Org.','Healt','Social','Lifest.'] }]}
      series={[{ label: "Pestle", data: pest.seriesData }]}
      width={500}
      height={400}
    />
  );
}
