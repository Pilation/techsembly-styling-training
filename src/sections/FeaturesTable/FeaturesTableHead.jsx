import { TableHead, TableRow, TableCell, Typography } from "@mui/material";
import Image from "next/image";
import techsemblyLogo from "../../../public/logo/techsemblyLogo.svg";
import EmptyRow from "./EmptyRow";

function Logo({ src, alt }) {
  return <Image src={src} width={180} height={30} alt={alt} />;
}

export default function FeaturesTableHead({ labels }) {
  return (
    <TableHead>
      <EmptyRow />
      <TableRow>
        <TableCell>
          <Typography
            variant="h3"
            component={"h3"}
            sx={{ width: "fit-content", color: "#fff" }}
          >
            Features
          </Typography>
        </TableCell>
        <TableCell sx={{ bgcolor: "#0069D91A" }}>
          <Logo src={techsemblyLogo} alt={"techsemblyLogo"} />
        </TableCell>

        {labels.map((logo, index) => (
          <TableCell key={index}>
            <Logo src={logo.src} alt={logo.alt} />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
