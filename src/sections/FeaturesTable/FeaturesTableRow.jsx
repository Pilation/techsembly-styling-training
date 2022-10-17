import { Typography, TableRow, TableCell, SxProps, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "../../components/Iconify";

const LinkWrapper = styled("a")({
  color: "inherit",
  textDecoration: "none",
  backgroundColor: "#F4F6F8",
  borderRadius: "8px",
  padding: "4px 8px",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.3s",
  },
});

export default function FeaturesTableRow({ row, sx }) {
  const { stakeholderGroup, stakeholderNumber, TPGSlink, TPGSZoneMap } = row;

  // table-layout: fixed
  return (
    <TableRow
      hover
      sx={{
        borderBottom: " 1px solid rgba(145, 158, 171, 0.24)",
        // height: '80px',
        ...sx,
      }}
    >
      <TableCell sx={{ width: "300px" }}>
        <Typography
          variant="subtitle2"
          // noWrap
          sx={{ width: "fit-content" }}
        >
          {stakeholderGroup}
        </Typography>
      </TableCell>

      <TableCell sx={{ width: "130px" }}>{stakeholderNumber}</TableCell>

      <TableCell sx={{ width: "110px" }}>
        <LinkWrapper href={TPGSlink} target="blank">
          <Iconify
            icon={"akar-icons:link-chain"}
            sx={{
              width: 20,
              height: 20,
              color: "#000",
            }}
          />
        </LinkWrapper>
      </TableCell>

      <TableCell
        align="center"
        sx={{ width: "200px", display: "flex", gap: 2, alignItems: "center" }}
      >
        <Box sx={{ flexGrow: 1 }}></Box>
        {`${TPGSZoneMap} %`}
      </TableCell>
    </TableRow>
  );
}
