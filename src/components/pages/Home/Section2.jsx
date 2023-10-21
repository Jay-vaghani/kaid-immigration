import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "./ServicesCard";

function Section2() {
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
        our services
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
    </Box>
  );
}

export default Section2;
