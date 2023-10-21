import { VolunteerActivism } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

function Section3Cards({ icon, iconTitle, description }) {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      mx={"auto"}
      md={6}
      borderRadius={3}
      sx={{
        boxShadow: "3px 3px 8px #e4e4e4b0",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          p={3}
          borderRight={{
            xs: "none",
            md: "4px solid #3adcff",
          }}
          borderBottom={{
            xs: "4px solid #3adcff",
            md: "none",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"primary.main"}
        >
          {icon}
        </Grid>
        <Grid item xs={12} md={8} p={3}>
          <Typography
            gutterBottom
            variant="h5"
            textTransform={"uppercase"}
            fontWeight={"600"}
          >
            {iconTitle}
          </Typography>

          <Typography variant="button">{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Section3Cards;
