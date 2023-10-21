import { CallRounded, Facebook, Instagram } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import CustomButton from "../../utils/Button";

function NavContactLine() {
  return (
    <Box bgcolor={"secondary.main"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"auto"}
        maxWidth={{
          xs: "100%",
          lg: "1400px",
        }}
        px={{
          xs: 2,
          md: 6,
        }}
      >
        <Box>
          <IconButton href="https://www.instagram.com/" target="_blank">
            <Instagram sx={{ color: "primary.main" }} />
          </IconButton>
          <IconButton href="https://www.facebook.com/" target="_blank">
            <Facebook sx={{ color: "primary.main" }} />
          </IconButton>
        </Box>
        <Box>
          <CustomButton
            title="Call Us"
            startIcon={<CallRounded />}
         
            size={"small"}
            href={"tel:0000000000"}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default NavContactLine;
