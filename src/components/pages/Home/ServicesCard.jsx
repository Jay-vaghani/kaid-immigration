import {
  CallRounded,
  KeyboardDoubleArrowRight,
  WhatsApp,
} from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomButton from "../../utils/Button";

function ServicesCard({ image, title, description }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        elevation={"3"}
        sx={{
          boxShadow: "3px 3px 8px #e4e4e4b0",
        }}
      >
        <CardMedia
          sx={{
            height: "200px",
          }}
        >
          <img
            src={image}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            textTransform={"uppercase"}
            fontWeight={"600"}
          >
            {title}
          </Typography>

          <Typography gutterBottom variant="button">
            {description}
          </Typography>

          <CardActions
            sx={{
              px: 0,
            }}
          >
            <Stack direction={"row"} spacing={2} mt={2}>
              <CustomButton
                endIcon={<CallRounded />}
                href={"tel:+14379133634"}
                title={"call"}
              />
              <CustomButton
                endIcon={<WhatsApp />}
                href={"https://wa.me/+16479133634"}
                title={"chat"}
              />
            </Stack>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ServicesCard;
