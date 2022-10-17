import Iconify from "../components/Iconify";
import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Addon from "./Addon";

const TypographyTextCenter = styled(Typography)({
  textAlign: "center",
});

const DividerWithMargins = styled(Divider)({
  margin: "32px 0",
});

function ProsPoint({ value }) {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      // justifyContent={"space-between"}
      component={"li"}
      sx={{ gap: 2.5 }}
    >
      <Iconify
        icon={"teenyicons:tick-circle-solid"}
        color={theme.palette.validation.success}
      />
      <Typography variant="body2" component="span" color="text.secondary">
        {value}
      </Typography>
    </Stack>
  );
}

export default function PricingCard({ color, pricingCardData, children, sx }) {
  const {
    clientType,
    clienDescription,
    startPrice,
    startPriceDescription,
    actionText,
    pricePoints,
    priceDescription,
    transactionFee,
    prosOfCollaboration,
  } = pricingCardData;
  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderTop: `4px solid${color}`,
        bgcolor: "#fff",
        px: 3,
        pb: 3,
        flex: "1 1 415px",
        ...sx,
      }}
    >
      <TypographyTextCenter variant="h3" component="h3" sx={{ my: 4 }}>
        {clientType}
      </TypographyTextCenter>
      <TypographyTextCenter
        variant="body1"
        component="p"
        sx={{ fontSize: "20px" }}
        color="text.secondary"
      >
        {clienDescription}
      </TypographyTextCenter>
      <TypographyTextCenter variant="h2" component="h2" sx={{ mt: 5 }}>
        {startPrice}
      </TypographyTextCenter>

      <TypographyTextCenter
        variant="body1"
        component="p"
        color="text.secondary"
        sx={{ mb: 5, fontSize: "20px" }}
      >
        {startPriceDescription}
      </TypographyTextCenter>
      <Button
        sx={{
          bgcolor: color,
          mb: 4,
          py: 1.75,
          px: 6,
          display: "block",
          mx: "auto",
        }}
        variant="contained"
      >
        {actionText}
      </Button>

      {pricePoints.map((point, index) => (
        <TypographyTextCenter
          key={index}
          variant="body2"
          component="p"
          color="grey.700"
          sx={{ mt: 0.5, fontWeight: 700 }}
        >
          {point}
        </TypographyTextCenter>
      ))}

      {priceDescription && (
        <TypographyTextCenter
          variant="body2"
          component="p"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          {priceDescription}
        </TypographyTextCenter>
      )}
      <DividerWithMargins />
      <Addon
        value={{ text: transactionFee.text, price: transactionFee.price }}
      />
      <DividerWithMargins />
      {children}
      <DividerWithMargins />
      <Stack sx={{ gap: 3 }} component={"ul"}>
        {prosOfCollaboration.map((prosPoint, index) => (
          <ProsPoint value={prosPoint} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
