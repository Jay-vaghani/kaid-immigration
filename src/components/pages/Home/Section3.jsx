import {
  FindInPageOutlined,
  HandshakeRounded,
  PsychologyRounded,
  SupportAgentRounded,
  TipsAndUpdatesRounded,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Section3Cards from "./Section3Cards";

function Section3() {
  const CardArray = [
    {
      title: "trust",
      des: "We earn and maintain trust through unwavering commitment to our clients, ensuring their immigration goals are met with confidence",
      icon: <VolunteerActivism sx={{ fontSize: 60 }} />,
    },
    {
      title: "Transparency",
      des: "We operate with full transparency, providing clear, honest information to guide clients through the immigration process with complete assurance",
      icon: <FindInPageOutlined sx={{ fontSize: 60 }} />,
    },
    {
      title: "Expertise",
      des: "Our team's expertise ensures clients receive the highest standard of immigration services, leading to successful and fulfilling journeys to Canada",
      icon: <PsychologyRounded sx={{ fontSize: 60 }} />,
    },
    {
      title: "Knowledge of Canadian Immigration",
      des: "With a deep understanding of Canadian immigration laws, we navigate complexities to secure clients' seamless entry",
      icon: <TipsAndUpdatesRounded sx={{ fontSize: 60 }} />,
    },
    {
      title: "Comprehensive Support",
      des: "Our comprehensive support system covers all aspects of immigration, offering clients a one-stop solution for their Canadian aspirations",
      icon: <SupportAgentRounded sx={{ fontSize: 60 }} />,
    },
    {
      title: "Personalized Service",
      des: "We offer personalized services tailored to each client's unique situation, guaranteeing they receive the guidance necessary to fulfill their immigration dreams",
      icon: <HandshakeRounded sx={{ fontSize: 60 }} />,
    },
  ];

  return (
    <Box
      my={4}
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
      <Typography
        variant="h4"
        mb={4}
        textAlign={"center"}
        textTransform={"uppercase"}
        fontWeight={600}
      >
        why choose Us{" "}
        <Typography
          variant="h4"
          display={"inline"}
          fontWeight={"600"}
          color={"primary.main"}
        >
          ?
        </Typography>
      </Typography>
      <Grid container spacing={2} rowGap={2}>
        {CardArray.map((data, index) => (
          <Section3Cards
            iconTitle={data.title}
            icon={data.icon}
            description={data.des}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Section3;
