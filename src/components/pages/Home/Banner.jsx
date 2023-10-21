import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Banner({ bannerInfo: { bannerUrl, title1, title2 } }) {
  return (
    <Box
      height={"85vh"}
      sx={{
        background: `linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(${bannerUrl})  top`,
        backgroundSize: "cover",
      }}
    >
      <Stack
        mx={"auto"}
        maxWidth={{
          xs: "100%",
          lg: "1400px",
        }}
        px={{
          xs: 2,
          md: 6,
        }}
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        height={"100%"}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={600}
            color={"primary.main"}
            sx={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}
          >
            {title1}
          </Typography>
          <Typography
            variant="h3"
            fontWeight={600}
            color={"primary.main"}
            sx={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}
          >
            {title2}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Banner;
