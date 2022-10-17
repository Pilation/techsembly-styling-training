import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
// import Box from '@mui/material'
// import Typography from '@mui/material'
// Link
// import useTheme from "@mui/material";
import { useState } from "react";
import Iconify from "../components/Iconify";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  useTheme,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import NextLink from "next/link";
import Logo from "../components/Logo";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Join30days from "../sections/Join30days";
import PricingCards from "../sections/PricingCards";
import FeaturesTable from "../sections/FeaturesTable";

const TypographyTextCenter = styled(Typography)({
  textAlign: "center",
});

export default function Home() {
  const [tryTodayIsOpen, setTryTodayIsOpen] = useState(true);
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Techsembly</title>
        <meta name="description" content="Techsembly styling training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {tryTodayIsOpen && <Announcement />}

      {/* header */}
      <Header />

      <Box component={"main"} sx={{ px: 1.5 }}>
        <Join30days />
        <PricingCards />
      </Box>

      {/* <main className={styles.main}></main>

      <footer className={styles.footer}></footer> */}
    </>
  );
}
