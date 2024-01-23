import { Box, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React from "react";
import Banner from "./Banner";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <Stack minHeight={"85vh"} position={"relative"} justifyContent={"center"}>
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        zIndex={999}
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(https://res.cloudinary.com/dby2vbxv3/image/upload/v1698931809/Kaid%20Immigration/Banner/banner.png)",
        }}
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
              textAlign={"center"}
            >
              Kaid Immigration
            </Typography>
            <Typography
              variant="h1"
              fontWeight={"600"}
              color={"#fff"}
              sx={{ fontSize: "clamp(1.8rem, 7vw, 4rem)" }}
              textAlign={"center"}

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
    </Stack>
  );
}

export default HeroSection;
