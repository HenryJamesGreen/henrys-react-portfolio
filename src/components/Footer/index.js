import { style } from "@mui/system";
import React from "react";
import "./style.css";
import { Style } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div>
 
        <Grid
        container
        spacing={0}
        justifyContent="center"
        style={{ marginTop: "0px", color: "white" , fontSize: "10px" }}
      
      >
      <span>Henry Green 2023</span>
      </Grid>
    </div>
  );
}

export default Footer;
