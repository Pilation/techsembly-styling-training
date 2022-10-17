import { Typography, Stack } from "@mui/material";

export default function Addon({ value }) {
  const { text, price } = value;
  return (
    <Stack
      direction={"row"}
      alignItems={"flexStart"}
      justifyContent={"space-between"}
      component={"li"}
    >
      <Typography variant="body2" component="span" color="text.secondary">
        {text}
      </Typography>
      <Typography
        variant="body2"
        component="span"
        color="dark.700"
        sx={{ fontWeight: 700 }}
      >
        {price}
      </Typography>
    </Stack>
  );
}
