import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Contact() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Typography variant="h2" style={{ color: "white", textAlign: "center" }}>
        Contact
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <a href="https://github.com/HenryJamesGreen" target={"_blank"}>
            <Item>GitHub</Item>
          </a>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <a
            href="https://www.linkedin.com/in/henryjamesgreen/"
            target={"_blank"}
          >
            <Item>linkedin</Item>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
