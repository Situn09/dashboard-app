import { getData } from "../store/json";

const json = await getData();
// console.log('json test',json)
const response = {
  columns: [
    {
      field: "title",
      filterable: true,
      groupable: false,
      headerName: "Title",
      sortable: true,
      width: 200,
      renderHeader: (params) => <strong>{"Title "}</strong>,
    },
    {
      field: "published",
      filterable: true,
      groupable: false,
      headerName: "Published",
      sortable: true,
      width: 150,
      renderHeader: (params) => <strong>{"Published "}</strong>,
    },
    {
      field: "source",
      filterable: true,
      groupable: false,
      headerName: "Source",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"Source "}</strong>,
    },
    {
      field: "insight",
      filterable: true,
      groupable: false,
      headerName: "Insight",
      sortable: true,
      width: 200,
      renderHeader: (params) => <strong>{"Insight "}</strong>,
    },
    {
      field: "url",
      filterable: true,
      groupable: false,
      headerName: "Link",
      sortable: true,
      width: 200,
      renderHeader: (params) => <strong>{"Link "}</strong>,
    },
    {
      field: "country",
      filterable: true,
      groupable: false,
      headerName: "Country",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"Country "}</strong>,
    },
    {
      field: "region",
      hide: true,
      filterable: true,
      groupable: false,
      headerName: "Region",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"Region "}</strong>,
    },
    {
      field: "pestle",
      filterable: true,
      groupable: false,
      headerName: "Pestle",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"Pestle "}</strong>,
    },
    {
      field: "sector",
      filterable: true,
      groupable: false,
      headerName: "Sector",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"Sector "}</strong>,
    },
    {
      field: "topic",
      filterable: true,
      groupable: false,
      headerName: "Topic",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"Topic "}</strong>,
    },
    {
      field: "end_year",
      filterable: true,
      groupable: false,
      headerName: "End Year",
      sortable: true,
      width: 120,
      renderHeader: (params) => <strong>{"End Year"}</strong>,
    },
  ],
  initialState: {
    columns: {
      columnVisibilityModel: {
        region: false,
      },
    },
  },
  rows: json.map((data) => {
    return { id: Math.floor(Math.random() * 1000000), ...data };
  }),
};

export default response;
