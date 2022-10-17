import { Button, useTheme } from "@mui/material";

export default function PinkButton({ text, sx }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: theme.palette.notification,
        color: theme.palette.text.primary,
        px: 1.5,
        py: 0.75,
        borderRadius: "100px",
        minWidth: "95px",
        fontSize: "10px",
        ...sx,
      }}
    >
      {text}
    </Button>
  );
}
