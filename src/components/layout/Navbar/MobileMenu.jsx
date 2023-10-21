import React, { useState } from "react";
import {
  Close,
  MenuRounded,
  PermPhoneMsgRounded,
  WhatsApp,
  CallRounded,
  SupportAgentRounded,
  HomeRounded,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListItemButtonNav from "./ListItemButton";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const drawerFunction = (link) => {
    setOpen(!open);
    navigate(link);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          px: 0,
        }}
      >
        <MenuRounded fontSize="large" sx={{ color: "primary.main" }} />
      </Button>

      <SwipeableDrawer
        open={open}
        onClose={drawerFunction}
        onOpen={drawerFunction}
        anchor="right"
        disableBackdropTransition={true}
        transitionDuration={{ enter: 700, exit: 350 }}
      >
        <Box
          py={2.1}
          pl={1.3}
          boxShadow={"0px 2px 25px 0px #e2e2e254"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" fontWeight={500}>
            Menu
          </Typography>
          <Button
            disableRipple
            onClick={() => setOpen(!open)}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Close fontSize="large" sx={{ color: "primary.main" }} />
          </Button>
        </Box>
        <List sx={{ width: "200px" }}>
          <ListItemButtonNav
            link={"/"}
            name="Home"
            drawerFunction={drawerFunction}
            icon={
              <HomeRounded fontSize="medium" sx={{ color: "primary.main" }} />
            }
          />

          <ListItemButtonNav
            link={"/service"}
            name="Services"
            drawerFunction={drawerFunction}
            icon={
              <SupportAgentRounded
                fontSize="medium"
                sx={{ color: "primary.main" }}
              />
            }
          />
          <ListItemButtonNav
            link={"/contact"}
            name="Contact"
            drawerFunction={drawerFunction}
            icon={
              <PermPhoneMsgRounded
                fontSize="medium"
                sx={{ color: "primary.main" }}
              />
            }
          />
          <ListItemButton href="https://wa.me/+16479133634" target="_blank">
            <ListItemIcon>
              <WhatsApp sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <Typography variant="h6">Whats App</Typography>
          </ListItemButton>
          <ListItemButton href="tel:0000000000">
            <ListItemIcon>
              <CallRounded sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <Typography variant="h6">Call Me</Typography>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;
