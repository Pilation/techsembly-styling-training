// next
import Head from "next/head";
// react
import { useState } from "react";
// mui
import { Box } from "@mui/material";

// sections
import Announcement from "../sections/Announcement";
import Header from "../sections/Header";
import Join30days from "../sections/Join30days";
import PricingCards from "../sections/PricingCards";
import FeaturesTable from "../sections/FeaturesTable";

export default function Home() {
  const [tryTodayIsOpen, setTryTodayIsOpen] = useState(true);
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
