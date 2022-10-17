import Iconify from "../components/Iconify";
import { Typography, IconButton, Stack } from "@mui/material";
import PinkButton from "./PinkButton";

// ----------------------------------------------------------------------

export default function Announcement({ icon, sx, handleClick, ...other }) {
  return (
    <Stack
      direction={"row"}
      sx={{ py: 1.75, px: 1.5, bgcolor: "#0A1B2B" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={3}
    >
      <PinkButton text={"Announcement"} />

      <Typography color={"#fff"} variant="caption">
        Try Techsembly today for a 12 day free trial period. No Additional
        costs/Unexpected fees
      </Typography>
      <IconButton sx={{ p: 0.5 }} onClick={handleClick}>
        <Iconify
          icon={"eva:close-fill"}
          width={20}
          height={20}
          color="#FFFFFF"
        />
      </IconButton>
    </Stack>
  );
}
