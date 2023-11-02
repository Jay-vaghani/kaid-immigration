import { Box, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Box>
      <Box
        mx={"auto"}
        maxWidth={{
          xs: "100%",
          lg: "1400px",
        }}
        py={1}
        px={{
          xs: 2,
          md: 6,
        }}
      ></Box>
    </Box>
  );
}

export default Contact;
