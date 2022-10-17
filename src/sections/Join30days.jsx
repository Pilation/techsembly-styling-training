import Iconify from "../components/Iconify";
import { Typography, Button, Stack, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const TypographyTextCenter = styled(Typography)({
  textAlign: "center",
});

export default function Join30days() {
  const theme = useTheme();
  return (
    <Stack component={"section"} sx={{ gap: 3 }} alignItems={"center"}>
      <TypographyTextCenter variant="h1" component="h1">
        Join us with your team for 30 days
      </TypographyTextCenter>
      <TypographyTextCenter
        variant="body1"
        component="p"
        sx={{ fontSize: "20px" }}
        color="text.secondary"
      >
        Try Techsembly free, no obligations.
      </TypographyTextCenter>
      <Button variant="outlined" sx={{ py: 1.75, px: 3, gap: 1, mt: 1 }}>
        Start your free trial
        <Iconify
          icon={"akar-icons:arrow-right"}
          width={20}
          height={20}
          color={theme.palette.blue.light}
        />
      </Button>
      <TypographyTextCenter
        color="text.primary"
        variant="body1"
        component="p"
        // sx={{ fontSize: 14, color: theme.palette.text.primary }}
      >
        No credit card required
      </TypographyTextCenter>
    </Stack>
  );
}
