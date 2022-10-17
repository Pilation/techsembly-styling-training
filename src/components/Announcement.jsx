import Iconify from "../components/Iconify";
import {
  Typography,
  IconButton,
  Stack,
  Link,
  useTheme,
  Box,
} from "@mui/material";
import PinkButton from "./PinkButton";
import NextLink from "next/link";
import useResponsive from "../hooks/useResponsive";

// ----------------------------------------------------------------------

export default function Announcement({ handleClick, sx }) {
  const theme = useTheme();
  const isMobile = useResponsive("down", "sm");
  return (
    <Box sx={{ bgcolor: "#0A1B2B" }}>
      <Stack
        direction={"row"}
        sx={{ py: 1.75, px: 1.5, mx: "auto", ...sx }}
        alignItems={"center"}
        justifyContent={isMobile ? "space-between" : "flex-start"}
        gap={3}
      >
        <PinkButton text={"Announcement"} />

        <Typography color={"#fff"} variant="caption">
          Try Techsembly today for a 12 day free trial period. No Additional
          costs/Unexpected fees
        </Typography>
        {!isMobile && (
          <NextLink href={"/"} passHref>
            <Link sx={{ fontSize: "12px", color: theme.palette.notification }}>
              Read More
            </Link>
          </NextLink>
        )}

        <IconButton sx={{ p: 0.5, ml: "auto" }} onClick={handleClick}>
          <Iconify
            icon={"eva:close-fill"}
            width={20}
            height={20}
            color="#FFFFFF"
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
