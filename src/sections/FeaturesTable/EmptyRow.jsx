// mui
import { TableRow, TableCell } from "@mui/material";

export default function EmptyRow() {
  return (
    <TableRow sx={{ height: "150px" }}>
      <TableCell />
      <TableCell sx={{ bgcolor: "#0069D91A" }} />
      <TableCell />
      <TableCell />
      <TableCell />
    </TableRow>
  );
}
