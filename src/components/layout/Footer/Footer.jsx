import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FooterLogo } from "../../assets/images/images";
import { Link } from "react-router-dom";
import {
  CallRounded,
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import CustomButton from "../../utils/Button";

function Footer() {
  return (
    <Stack bgcolor={"#000"} borderRadius={"15cd px 15cd px 0 0"}>
      <Grid
        container
        spacing={3}
        color={"#fff"}
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
        <Grid item xs={12} sm={6} md={4} px={2}>
          <img src={FooterLogo} width="100%" alt="logo" />
          <Typography variant="body1" mt={2}>
            Welcome to Kaid Immigration, your one-stop solution for all your
            immigration and visa needs. We specialize in helping individuals and
            families achieve their dreams of living and working in their dream
            destinations.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2.5} px={2}>
          <Typography variant="h5">Navigation Links</Typography>
          <Typography variant="h6" mt={3} letterSpacing={3}>
            <Link
              style={{
                color: "#3adcff",
              }}
              to={"/"}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="h6" mt={3} letterSpacing={3}>
            <Link
              style={{
                color: "#3adcff",
              }}
              to={"/service"}
            >
              Service
            </Link>
          </Typography>
          <Typography variant="h6" mt={3} letterSpacing={3}>
            <Link
              style={{
                color: "#3adcff",
              }}
              to={"/contact"}
            >
              Contact
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2.5} px={2}>
          <Typography variant="h5" color={"#fff"}>
            Follow Us
          </Typography>
          <Stack direction={"row"} mt={2}>
            <Button startIcon={<Facebook />} variant="contained">
              facebook
            </Button>
          </Stack>
          <Stack direction={"row"} mt={2}>
            <Button startIcon={<Instagram />} variant="contained">
              instagram
            </Button>
          </Stack>
          <Stack direction={"row"} mt={2}>
            <Button startIcon={<Twitter />} variant="contained">
              Twitter
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={2.5} px={2}>
          <Typography variant="h5" color={"#fff"}>
            Contact
          </Typography>
          <Stack direction={"row"} mt={2}>
            <CustomButton
              title="email"
              color={"#000"}
              startIcon={<Email />}
              href={"mailto:impeximmegration@gmail.com"}
            />
          </Stack>
          <Stack direction={"row"} mt={2}>
            <CustomButton
              color={"#000"}
              title="Call Us"
              startIcon={<CallRounded />}
              href={"tel:0000000000"}
            />
          </Stack>
          <Stack direction={"row"} mt={2}>
            <CustomButton
              startIcon={<WhatsApp />}
              href={"https://wa.me/+16479133634"}
              title={"chat"}
              color={"#000"}
            />
          </Stack>
        </Grid>
      </Grid>
      <hr
        color="#e4e4e4"
        style={{
          width: "92%",
          margin: "auto",
          borderRadius: "5px 5px 5px 5px ",
        }}
      />
      <Typography variant="body1" color={"#fff"} textAlign={"center"} p={1.5}>
        Copyright © 2023 Kaid Immigration. All rights reserved.
      </Typography>
    </Stack>
  );
}

export default Footer;
