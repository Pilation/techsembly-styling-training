import Image from "next/image";
import { Box } from "@mui/material";
import logoPath from "../../public/logo/techsemblyLogo.svg";
import NextLink from "next/link";

// ----------------------------------------------------------------------

export default function Logo({ sx, ...other }) {
  return (
    <NextLink href="/" passHref>
      <Box sx={{ ...sx }}>
        <Image
          src={logoPath}
          width={155}
          height={24}
          alt="Techsembly logo"
          {...other}
        />
      </Box>
    </NextLink>
  );
}
