import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "0",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} Iuri Alves Contarelli
      </Typography>
    </Box>
  );
}

export default Footer;
