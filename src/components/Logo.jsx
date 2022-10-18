// next
import Image from "next/image";
import NextLink from "next/link";
// mui
import { Box } from "@mui/material";
// logo
import logoPath from "../../public/logo/techsemblyLogoBlack.svg";

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
