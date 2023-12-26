import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

/// my NOTE for mui chart
export default function BarAnimation() {
    const datas =[2423, 2210, 764]
    const names =["group A", "group B", "group C"]
  return (
    <BarChart
      height={300}
      // for axis band name
      xAxis={[{ scaleType: "band", data:names  }]}
      // for data insert as per syntax which is [{lable:'',data:[]}]
      series={[
        {
          label: "series 1",
          data: datas,
        },
      ]}
      // default layout is vertical
      layout='vertical'
    />
  );
}
