import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
import { getWorldData } from "../store/actions";




const World = () => {
  const data = useSelector(getWorldData)

    return (<div style={{padding: '10px 5px 5px 0px'}}>
      {<Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        data={data}
      />}
    </div>)
}

export default World;