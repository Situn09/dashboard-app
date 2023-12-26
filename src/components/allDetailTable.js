import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import response from "../data/fillterData";


export default function AllDetailTable() {

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid {...response} slots={{ toolbar: GridToolbar }} />
    </div>
  );
}
