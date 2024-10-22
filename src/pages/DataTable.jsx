import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import MKBox from "components/MKBox";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "ticket", headerName: "Ticket", width: 150 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "group", headerName: "Assignment Group", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    sortable: true,
    resizable: false,
  },
  {
    field: "description",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    resizable: false,
  },
  { field: "opened_at", headerName: "Open Time", width: 130 },
  { field: "updated_at", headerName: "Update Time", width: 130 },
  { field: "assignee", headerName: "Assignee", width: 130 },
];

const rows = [
  {
    id: 1,
    ticket: "Test Blood group",
    category: "Medical",
    group: "group 2",
    status: "Active",
    description: "description here",
    opened_at: "2024-10-02",
    updated_at: "2024-10-04",
    assignee: "Test user",
  },
  {
    id: 2,
    ticket: "Test Blood group",
    category: "Medical",
    group: "group 2",
    status: "Active",
    description: "a description here",
    opened_at: "2024-10-02",
    updated_at: "2024-10-04",
    assignee: "Test user",
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
