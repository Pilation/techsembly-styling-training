// mui
import {
  Card,
  TableContainer,
  Table,
  TableBody,
  Stack,
  useTheme,
  Box,
  Typography,
} from "@mui/material";

// logos
import bigCommerceLogo from "../../../public/logo/bigCommerceLogo.svg";
import magentoLogo from "../../../public/logo/magentoLogo.svg";
import shopifyLogo from "../../../public/logo/shopifyLogo.svg";

// components
import FeaturesTableHead from "./FeaturesTableHead";
import FeaturesTableRow from "./FeaturesTableRow";
import EmptyRow from "./EmptyRow";

// hooks
import useResponsive from "../../hooks/useResponsive";

const logos = [
  { src: bigCommerceLogo, alt: "bigCommerceLogo" },
  { src: shopifyLogo, alt: "shopifyLogo" },
  { src: magentoLogo, alt: "magentoLogo" },
];

const rowsValues = [
  {
    label: "Central platform & global expansion",
    bigCommerce: false,
    shopify: false,
    magento: false,
  },
  {
    label: "30-Day Free Trial",
    bigCommerce: true,
    shopify: false,
    magento: false,
  },
  {
    label: "Marketplace as standard",
    bigCommerce: false,
    shopify: false,
    magento: false,
  },
  {
    label: "Multi-base Currency",
    bigCommerce: false,
    shopify: false,
    magento: false,
  },
  {
    label: "Custom options built in as standard",
    bigCommerce: false,
    shopify: false,
    magento: false,
  },
  {
    label: "Independent Teams",
    bigCommerce: false,
    shopify: false,
    magento: false,
  },
  {
    label: "Centralised Analytics",
    bigCommerce: false,
    shopify: false,
    magento: false,
  },
  {
    label: "Ratings & Reviews",
    bigCommerce: true,
    shopify: true,
    magento: true,
  },
];

function NoDevelopersNeeded() {
  const theme = useTheme();
  const isMobile = useResponsive("down", "sm");
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        bgcolor: theme.palette.blue.light,
        p: 3,
        width: isMobile ? "137px" : "222px",

        aspectRatio: "1/1",
        position: "absolute",
        bottom: isMobile ? "-60px" : "-170px",
        right: isMobile ? "20px" : "51px",
        borderRadius: "50%",
        transform: "rotate(20deg)",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        color="#fff"
        align="center"
        sx={{ fontWeight: "normal", fontSize: isMobile ? "20px" : "32px" }}
      >
        No developers needed
      </Typography>
    </Stack>
  );
}

export default function FeaturesTable({ sx }) {
  const theme = useTheme();
  return (
    <Box component={"section"} sx={{ position: "relative" }}>
      <Box
        sx={{
          bgcolor: theme.palette.dark[900],
          overflowX: "auto",
          ...sx,
        }}
      >
        <TableContainer
          sx={{
            minWidth: "1440px",
          }}
        >
          <Table>
            <FeaturesTableHead labels={logos} />
            <TableBody>
              {rowsValues.map((rowsValue, index) => (
                <FeaturesTableRow key={index} row={rowsValue} />
              ))}
              <EmptyRow />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <NoDevelopersNeeded />
    </Box>
  );
}
