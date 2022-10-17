import { TableHead, TableRow, TableCell, SxProps } from "@mui/material";

export default function FeaturesTableHead({ headLabel, sx }) {
  return (
    <TableHead sx={{ ...sx }}>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{
              backgroundColor: "inherit",
              borderBottom: " 1px solid rgba(145, 158, 171, 0.24)",
              color: "inherit",
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
