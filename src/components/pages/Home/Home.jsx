import { Box, Typography } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Home() {
  return (
    <Box>
      <HeroSection />
      <Section2 />
      <Section3 />
    </Box>
  );
}

export default Home;
