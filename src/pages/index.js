import Head from "next/head";
import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Join30days from "../sections/Join30days";
import PricingCards from "../sections/PricingCards";
import FeaturesTable from "../sections/FeaturesTable";
import useResponsive from "../hooks/useResponsive";

const TypographyTextCenter = styled(Typography)({
  textAlign: "center",
});

export default function Home() {
  const [tryTodayIsOpen, setTryTodayIsOpen] = useState(true);
  const isMobile = useResponsive("down", "sm");
  const closeAnnouncement = () => {
    setTryTodayIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Techsembly</title>
        <meta name="description" content="Techsembly styling training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {tryTodayIsOpen && (
        <Announcement
          sx={{ maxWidth: "888px" }}
          handleClick={closeAnnouncement}
        />
      )}
      <Header />
      <Box component={"main"} sx={{ pb: 20 }}>
        <Box sx={{ maxWidth: "888px", mx: "auto" }}>
          <Join30days sx={{ mt: 8 }} />
          <PricingCards sx={{ mt: 8 }} />
        </Box>
        <FeaturesTable sx={{ mt: 12 }} />
      </Box>
      {/* <footer></footer> */}
    </>
  );
}
