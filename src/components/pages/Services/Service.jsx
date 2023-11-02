import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "../Home/ServicesCard";
import { CallRounded, CheckCircle, WhatsApp } from "@mui/icons-material";
import CustomButton from "../../utils/Button";

function Service() {
  const services = [
    {
      title: "Study visa and extension",
      description:
        "Simplify your global education journey with our streamlined student visa applications and extensions.",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697734380/Kaid%20Immigration/Services/study-visa.jpg",
    },
    {
      title: "Work permit and extension",
      description:
        "Streamlined work permits for your global career. We simplify the process, making international employment a reality",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697734645/Kaid%20Immigration/Services/work-permit.jpg",
    },
    {
      title: "Visitor visa and extension",
      description:
        "Simplify travel and extend your stay effortlessly. Explore the world with our Visitor Visa and Extension services.",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697736195/Kaid%20Immigration/Services/visitor-visa.jpg",
    },
    {
      title: "Permanent Residency services",
      description:
        "Secure your future with Permanent Residency services. We simplify the path to calling your dream country home",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697737439/Kaid%20Immigration/Services/pr-visa.jpg",
    },
    {
      title: "Lmia",
      description:
        "Simplify Canadian employment pathways. Our LMIA service is your key to a successful career in Canada.",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697736873/Kaid%20Immigration/Services/lmia-visa.jpg",
    },
    {
      title: "Business visa",
      description:
        "Simplify global growth. Our Business Visa services ease international success for your enterprise",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697737542/Kaid%20Immigration/Services/business-visa.jpg",
    },
    {
      title: "Spouse work permit",
      description:
        "Empower your spouse's career with our simplified Spouse Work Permit services. Unlock dual career opportunities",
      imageUrl:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1697738473/Kaid%20Immigration/Services/spouse.jpg",
    },
  ];
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
        <Typography variant="h3" textAlign={"center"} my={4}>
          Our Service
          <div
            style={{
              width: "253px",
              margin: "0 auto",
              height: "3px",
              backgroundColor: "#3adcff",
            }}
          ></div>
        </Typography>
        <Grid container spacing={2}>
          {services.map((data, index) => (
            <ServicesCard
              image={data.imageUrl}
              title={data.title}
              key={index}
              description={data.description}
            />
          ))}
        </Grid>
        <Grid
          container
          bgcolor={"#000"}
          position={"relative"}
          alignItems={"center"}
          color={"#fff"}
          my={4}
          borderRadius={"15px 15px 15px 15px"}
          overflow={"hidden"}
        >
          <Grid item xs={12} sm={6}>
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1698938574/Kaid%20Immigration/Banner/bannner2.png"
              alt="banner"
              style={{
                objectFit: "cover",
                position: "absolute",
                top: "0",
                left: 0,
                width: "50%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} p={3}>
            <Stack>
              <Typography variant="h4" fontWeight={"600"}>
                Get Free Visa
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Assessment Today!
              </Typography>
              <Typography variant="body1" my={3}>
                Top Rated By Customers & Immigration Firms With 100% Success
                Rate.
              </Typography>
              <Typography variant="body1" mb={2}>
                <CheckCircle
                  fontSize="inherit"
                  sx={{ color: "primary.main", mb: "-2px" }}
                />{" "}
                Our expert team is here to evaluate your eligibility and guide
                you through the immigration process
              </Typography>
              <Typography variant="body1" mb={3}>
                <CheckCircle
                  fontSize="inherit"
                  sx={{ color: "primary.main", mb: "-2px" }}
                />{" "}
                Discover your pathway to Canadian dreams today with a
                no-obligation assessment
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <CustomButton
                color={"#000"}
                title={"call"}
                href={"tel:+14379133634"}
                endIcon={<CallRounded />}
              />
              <CustomButton
                endIcon={<WhatsApp />}
                href={"https://wa.me/+16479133634"}
                title={"chat"}
                color={"#000"}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Service;
