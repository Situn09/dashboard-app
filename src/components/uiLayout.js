import AllDetailTable from "./allDetailTable";
import World from "./world";
import counterSlice from "../store/slice";
import { useDispatch } from "react-redux";
import PieCharts from "./piChart";
import TopicsBar from "./topicsBar";
import GroupBar from "./groupBar";
import Pestle from "./pestle";
import IntensityLineChart from "./intensity";
import { getData } from "../store/json";

const json = await getData();

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "450px auto auto ",
    gridTemplateRows: "300px 350px 350px auto",
    height: "1400px",
    width: "98%",
    gap: "10px",
    margin: 10,
  },
  a: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "0 0 15px 0",
    margin: "",
    // width: 'intrinsic'
  },
  b: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "0 0 15px 15px",
  },
  c: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "0 0 0 15px",
  },
  d: {
    gridColumn: "1 / 4",
    gridRow: "2 / 4",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    // height:"700px",
    // overflow:"hidden"
  },
  e: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "0 15px 0 0",
  },
  f: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "15px 15px 0 0",
  },
  g: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "15px 0 0 0",
  },
};

const Layout = () => {
  const dispatch = useDispatch();
  dispatch(counterSlice.actions.updateData(json));

  return (
    <div style={styles.root}>
      <div style={styles.a}>
        <World />
      </div>
      <div style={styles.b}>
        <PieCharts />
      </div>
      <div style={styles.c}>
        <TopicsBar />
      </div>
      <div style={styles.d}>
        <AllDetailTable />
      </div>
      <div style={styles.e}>
        <GroupBar />
      </div>
      <div style={styles.f}>
        <Pestle />
      </div>
      <div style={styles.g}>
        <IntensityLineChart />
      </div>
    </div>
  );
};

export default Layout;
