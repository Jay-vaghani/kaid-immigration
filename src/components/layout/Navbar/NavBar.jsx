import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";

import { Logo } from "../../assets/images/images";
import NavContactLine from "../NavContactLine/NavContactLine";

function NavBar() {
  const navLinkAnimationObj = {
    position: "relative",
    ":after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0%",
      height: "3px",
      backgroundColor: "primary.main",
      transition: "0.3s ease-in-out",
    },
    ":hover": {
      ":after": {
        width: "100%",
      },
    },
  };

  return (
    <>
      <NavContactLine />
      <Box
        mx={"auto"}
        maxWidth={{
          xs: "100%",
          lg: "1400px",
        }}
        px={{
          xs: 2,
          md: 6,
        }}
        py={.7}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow={"0px 2px 25px 0px #e2e2e254"}
        width={"100%"}
        top={0}
        zIndex={999}
        left={0}
        bgcolor={"white"}
      >
        <img src={Logo} width={"70px"} alt="" />
        <Box
          width={"60%"}
          display={{
            xs: "none",
            sm: "block",
          }}
        ></Box>

        <Stack
          direction={"row"}
          spacing={3}
          alignItems={"center"}
          display={{
            sm: "flex",
            xs: "none",
          }}
        >
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={navLinkAnimationObj}
              color={"primary.main"}
            >
              Home
            </Typography>
          </NavLink>

          <NavLink to={"/service"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={navLinkAnimationObj}
              fontWeight={600}
              color={"primary.main"}
            >
              Services
            </Typography>
          </NavLink>
          <NavLink to={"/contact"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={navLinkAnimationObj}
              fontWeight={600}
              color={"primary.main"}
            >
              Contact
            </Typography>
          </NavLink>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"end"}
          display={{
            sm: "none",
            xs: "flex",
          }}
        >
          <MobileMenu />
        </Stack>
      </Box>
    </>
  );
}

export default NavBar;
