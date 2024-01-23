import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";

function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });

  const formHTML = useRef()

  const { handleSubmit, register, formState } = form;

  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data) => {


    console.log(formHTML);
    emailjs
      .sendForm(
        "service_ja7llea",
        "template_ltr5gzv",
        formHTML.current,
        "BZ1n2vJy3v3Dz8N4k"
      )

  }

  var expr = /^(0|91)?[6-9][0-9]{9}$/;

  console.log(expr.test(6444));

  console.log(errors);

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
        <h1 className="display-5 fw-600 text-center">CONTACT US</h1>
        <form className="my-5" onSubmit={handleSubmit(onSubmit)} ref={formHTML}>
          <Grid
            container
            justifyContent={"center"}
            maxWidth={"600px"}
            mx={"auto"}
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                label="Name"
                id="name"
                name="name"
                variant="outlined"
                fullWidth
                helperText={errors.name?.message}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required"
                  }
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "EMAIL IS INVALID",
                  }
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone"
                name="phone"
                label="phone"
                variant="outlined"
                type="number"
                fullWidth
                error={errors.phone ? true : false}
                helperText={errors.phone?.message}
                {...register("phone", {
                  pattern: /^(0|91)?[6-9][0-9]{9}$/,
                  required: {
                    value: true,
                    message: "number is required",
                  },
                  valueAsNumber: true
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" className="py-2" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
