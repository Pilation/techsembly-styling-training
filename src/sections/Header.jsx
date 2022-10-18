import { useState } from "react";
import Iconify from "../components/Iconify";
import { IconButton, Stack, useTheme } from "@mui/material";
import Logo from "../components/Logo";

export default function Header(sx) {
  const theme = useTheme();
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <Stack
      component={"header"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        py: 2.5,
        px: 1.5,
        boxShadow: "0px 0px 20px rgba(207, 207, 207, 0.3)",
        ...sx,
      }}
    >
      <Logo />

      <IconButton sx={{ p: 0.5 }} onClick={() => setMenuOpened(!menuOpened)}>
        <Iconify icon={"tabler:menu"} color={theme.palette.text.primary} />
      </IconButton>
    </Stack>
  );
}
