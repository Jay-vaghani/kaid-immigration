import React from "react";
import { Button } from "@mui/material";

function CustomButton({ size, href, startIcon, endIcon, title, color }) {
  return (
    <>
      <Button
        disableElevation
        variant="contained"
        href={href ? href : "/"}
        size={size ? size : "medium"}
        startIcon={startIcon ? startIcon : null}
        endIcon={endIcon ? endIcon : null}
        sx={{ color: color ? color : "#fff" }}
        target="_blank"
      >
        {title}
      </Button>
    </>
  );
}

export default CustomButton;
