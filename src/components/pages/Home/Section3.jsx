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
  const iconSize = {
    fontSize: 60,
  };

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
      <Grid container spacing={2}>
        <Section3Cards
          iconTitle={"trust"}
          icon={<VolunteerActivism sx={iconSize} />}
          description={
            "We earn and maintain trust through unwavering commitment to our clients, ensuring their immigration goals are met with confidence"
          }
        />
        <Section3Cards
          iconTitle={"Transparency"}
          icon={<FindInPageOutlined sx={iconSize} />}
          description={
            "We operate with full transparency, providing clear, honest information to guide clients through the immigration process with complete assurance"
          }
        />
        <Section3Cards
          iconTitle={"Expertise"}
          icon={<PsychologyRounded sx={iconSize} />}
          description={
            "Our team's expertise ensures clients receive the highest standard of immigration services, leading to successful and fulfilling journeys to Canada "
          }
        />
        <Section3Cards
          iconTitle={"Knowledge of Canadian Immigration"}
          icon={<TipsAndUpdatesRounded sx={iconSize} />}
          description={
            "With a deep understanding of Canadian immigration laws, we navigate complexities to secure clients' seamless entry"
          }
        />
        <Section3Cards
          iconTitle={"Comprehensive Support"}
          icon={<SupportAgentRounded sx={iconSize} />}
          description={
            "Our comprehensive support system covers all aspects of immigration, offering clients a one-stop solution for their Canadian aspirations"
          }
        />
        <Section3Cards
          iconTitle={"Personalized Service"}
          icon={<HandshakeRounded sx={iconSize} />}
          description={
            " We offer personalized services tailored to each client's unique situation, guaranteeing they receive the guidance necessary to fulfill their immigration dreams"
          }
        />
      </Grid>
    </Box>
  );
}

export default Section3;
