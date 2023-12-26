import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { topicBar } from "../data/topicBarData";

const chartSetting = {
  width: 500,
  height: 400,
};

export default function TopicsBar() {
  const [value, setValue] = React.useState("Government");
  function getValue(e) {
    setValue(e.target.value);
  }
  // console.log(value);
  const data = topicBar(value);
  // console.log(data);
  const topicName = value == "" ? "Undefine" : value;
  return (
    <>
      <label for={"topics"}>Choose a Sector : </label>
      <select id={"topics"} onChange={getValue}>
        <option value="Energy">Energy</option>
        <option value="Environment">Environment</option>
        <option value="">Undefine</option>
        <option value="Government" selected>
          Government{" "}
        </option>
        <option value="Aerospace & defence">Aerospace & defence</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Retail">Retail</option>
        <option value="Financial services">Financial Services</option>
        <option value="Support services">Support Services</option>
        <option value="Information Technology">IT</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Food & agriculture">Food & Agriculture</option>
        <option value="Automotive">Automotive</option>
        <option value="Tourism & hospitality">Tourism & Hospitality</option>
        <option value="Construction">Construction</option>
        <option value="Security">Security</option>
        <option value="Transport">Transport</option>
        <option value="Water">Water</option>
        <option value="Media & entertainment">Media & Etertainment</option>
      </select>
      <BarChart
        height={100}
        margin={{
          left: 50,
          right: 0,
          top: 10,
          bottom: 150,
        }}
        dataset={data}
        yAxis={[{ scaleType: "band", dataKey: "name" }]}
        series={[{ dataKey: "value", label: `News Topics in ${topicName}` }]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        layout="horizontal"
        {...chartSetting}
      />
      <span style={{position:"relative",top:'-150px',left:'170px',fontWeight:'700',backgroundColor:"#fff" }}>
        News Topics in {topicName}
      </span>
    </>
  );
}
