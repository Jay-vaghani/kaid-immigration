import { Box, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";
import Banner from "./Banner";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <Stack
      minHeight={"85vh"}
      position={"relative"}
      bgcolor={"primary.main"}
      justifyContent={"center"}
    >
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        bgcolor={"#3acff02e"}
        zIndex={999}
      >
        <Stack
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
          height={"100%"}
          justifyContent={"center"}
        >
          <Box mt={-8}>
            <Typography
              variant="h1"
              fontWeight={"600"}
              color={"#fff"}
              sx={{ fontSize: "clamp(2.3rem, 7vw, 4rem)" }}
            >
              Kaid Immigration
            </Typography>
            <Typography
              variant="h1"
              fontWeight={"600"}
              color={"#fff"}
              sx={{ fontSize: "clamp(1.8rem, 7vw, 4rem)" }}
            >
              <TypeAnimation
                style={{
                  height: "1px",
                  display: "block",
                }}
                cursor={false}
                sequence={[
                  `Study visa`,
                  1000,
                  `Work Visa`,
                  1000,
                  `Visitor visa`,
                  1000,
                  `Permanent Residency`,
                  1000,
                  `Visitor visa`,
                  1000,
                  `LMIA`,
                  1000,
                  `Business visa`,
                  1000,
                  `Spouse work permit`,
                  1000,
                ]}
                repeat={Infinity}
              />
            </Typography>
          </Box>
        </Stack>
      </Box>
      <video
        src="https://res.cloudinary.com/dby2vbxv3/video/upload/v1697740037/Kaid%20Immigration/Banner/banner.mp4"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      ></video>
    </Stack>
  );
}

export default HeroSection;
