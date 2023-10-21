import { Box, Typography } from "@mui/material";
import React from "react";

function Service() {
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
      >
        <Typography variant="h4">Service</Typography>
      </Box>
    </Box>
  );
}

export default Service;
