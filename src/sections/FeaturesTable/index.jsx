// mui
import {
  Card,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
  SxProps,
  styled,
  Button,
} from "@mui/material";
// hooks
import { useState } from "react";
import useTable from "../../hooks/useTable";

// components
import FeaturesTableHead from "./FeaturesTableHead";
import FeaturesTableRow from "./FeaturesTableRow";
import Scrollbar from "../../components/Scrollbar";

// If table will became bigger, we can use Scrollbar component with fixed width
export default function FeaturesTable({ stakeholderList, headLabel, styles }) {
  return (
    <Scrollbar>
      {/* <TableContainer sx={{ minWidth: 800, position: 'relative' }}> */}
      <TableContainer sx={{ width: "fit-content", position: "relative" }}>
        <Table size={dense ? "small" : "medium"}>
          {/* <FeaturesTableHead headLabel={headLabel} sx={{ ...styles?.head }} /> */}
          <TableBody>
            {/* {features.map((feature) => (
              <FeaturesTableRow key={feature.id} row={feature} />
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
}
