// mui
import { Typography, TableRow, TableCell, useTheme } from "@mui/material";
// components
import Iconify from "../../components/Iconify";

export default function FeaturesTableRow({ row, sx }) {
  const theme = useTheme();
  const cells = Object.values(row).filter((e) => typeof e === "boolean");

  const tickOrPlus = (value) => {
    if (value) return <Iconify icon={"charm:tick"} color="#fff" />;
    return (
      <Iconify
        icon={"charm:plus"}
        sx={{ transform: "rotate(45deg)" }}
        color="#fff"
      />
    );
  };

  return (
    <TableRow sx={{ borderBottom: "1px solid #E6E6E84D" }}>
      <TableCell>
        <Typography variant="body1" color={"#fff"} sx={{ fontSize: "20px" }}>
          {row.label}
        </Typography>
      </TableCell>

      <TableCell align="center" sx={{ bgcolor: "#0069D91A" }}>
        <Iconify
          icon={"teenyicons:tick-circle-solid"}
          color={theme.palette.validation.success}
          sx={{ overflow: "hidden", bgcolor: "#fff", borderRadius: "50%" }}
        />
      </TableCell>
      {cells.map((cell, index) => (
        <TableCell key={index} align="center">
          {tickOrPlus(cell)}
        </TableCell>
      ))}
    </TableRow>
  );
}
