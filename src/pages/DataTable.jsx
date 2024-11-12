import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import MKBox from "components/MKBox";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "division", headerName: "Division", width: 150 },
  { field: "memberId", headerName: "Member Id", width: 130 },
  { field: "submittedId", headerName: "Submitter Id", width: 150 },
  {
    field: "providerId",
    headerName: "Provider Id",
    width: 150,
    sortable: true,
    resizable: false,
  },
  { field: "thruDate", headerName: "Thru Date", width: 130 },
  { field: "fromDate", headerName: "From Date", width: 130 },
];

const rows = [
  {
    id: 1,
    division: "SLC",
    memberId: "28784748799",
    submittedId: "28723948774",
    providerId: "Perf Testing",
    thruDate: "2024-10-02",
    fromDate: "2024-10-04",
  },
  {
    id: 2,
    division: "SLC",
    memberId: "28784748774",
    submittedId: "28723948774",
    providerId: "Perf Testing",
    thruDate: "2024-07-02",
    fromDate: "2024-09-04",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const DataTable = () => {
  return (
    <>
      <MKBox sx={{ width: "100%" }}>
        <Paper>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Paper>
      </MKBox>
    </>
  );
};

export default DataTable;
