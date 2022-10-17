import Iconify from "../components/Iconify";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import Addon from "../components/Addon";
import PricingCard from "../components/PricingCard";
import PinkButton from "../components/PinkButton";

const pricingCardData = {
  clientType: "Assembly",
  clienDescription:
    "Go global. Launch new storefronts in seconds. Everything you need to bring your products to the world",
  startPrice: "Start at $500 USD",
  startPriceDescription: "/yearly or $600 monthly",
  actionText: "Get started",
  pricePoints: ["2 Storefronts", "5 Vendors"],
  priceDescription: "Add more storefronts and vendors as you grow",
  transactionFee: { text: "Transaction fee", price: "0.25%" },
  prosOfCollaboration: [
    "Multilingual website builder",
    "Mobile eCommerce",
    "Frictionless Progressive Web App",
    "Multi-vendor Marketplace Solution",
    "Multiple Base Currencies",
    "Complex Personalisation",
    "Store specific inventory & logistics",
    "Multiple Payment Gateways (Adyen, Stripe, Braintree, PayPal)",
  ],
};

const addonsList = [
  { text: "1x additional storefront", price: "$250" },
  { text: "10x additional vendors", price: "$100" },
  { text: "30x additional vendors", price: "$199" },
  { text: "100x additional vendors", price: "$500" },
  { text: "500x additional vendors", price: "$1,000" },
  { text: "1000x additional vendors", price: "$1,250" },
];

function VendorsAddons() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={
          <Iconify
            icon={"ic:round-expand-more"}
            color="text.primary"
            style={{ fontSize: "25px" }}
          />
        }
        aria-controls="addons"
        id="addons"
      >
        <Typography>Storefront/Vendors addons</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={{ gap: 2 }}>
          {addonsList.map((addonsItem, index) => (
            <Addon value={addonsItem} key={index} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

function LaunchAcrossMultipleMarkets() {
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} sx={{ gap: 1 }}>
        <PinkButton
          sx={{ textTransform: "uppercase", px: 1.5, minWidth: 0 }}
          text={"new"}
        />
        <Typography
          variant="body2"
          component="p"
          color="grey.700"
          sx={{ fontWeight: 700 }}
        >
          Launch across multiple markets
        </Typography>
      </Stack>
      <Typography variant="body2" component="p" color="grey.700" sx={{ mt: 2 }}>
        {"Release your store in multiple locations across teams in seconds "}
        <Link>Learn more</Link>
      </Typography>
    </Box>
  );
}

export default function PricingCards({ sx }) {
  const theme = useTheme();
  return (
    <Stack
      component={"section"}
      direction={"row"}
      flexWrap={"wrap"}
      alignItems={"stretch"}
      justifyContent={"center"}
      sx={{ gap: 7, px: 1.5, ...sx }}
    >
      <PricingCard
        color={theme.palette.blue.light}
        pricingCardData={pricingCardData}
      >
        <VendorsAddons />
      </PricingCard>
      <PricingCard color={"#000"} pricingCardData={pricingCardData}>
        <LaunchAcrossMultipleMarkets />
      </PricingCard>
    </Stack>
  );
}
