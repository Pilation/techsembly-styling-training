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
} from "@mui/material";
import NextLink from "next/link";
import Logo from "../components/Logo";

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
      {tryTodayIsOpen && (
        <Stack
          direction={"row"}
          sx={{ py: 1.75, px: 1.5, bgcolor: "#0A1B2B" }}
          alignItems={"center"}
          gap={3}
        >
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
            }}
          >
            Announcement
          </Button>
          <Typography color={"#fff"} variant="caption">
            Try Techsembly today for a 12 day free trial period. No Additional
            costs/Unexpected fees
          </Typography>
          {/* <NextLink href={"/"} passHref>
            <Typography color={theme.palette.notification}>
              Read more details
            </Typography>
          </NextLink> */}
          <IconButton sx={{ p: 0.5 }} onClick={() => setTryTodayIsOpen(false)}>
            <Iconify
              icon={"eva:close-fill"}
              width={20}
              height={20}
              color="#FFFFFF"
            />
          </IconButton>
        </Stack>
      )}

      {/* header */}
      <Box component={"header"}>
        <Logo />
      </Box>
      {/*
      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer> */}
    </>
  );
}
