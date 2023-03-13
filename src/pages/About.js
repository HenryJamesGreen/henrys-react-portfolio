import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import myImage from "../images/oldheadshot.jpeg";

function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: 400 }}>
        <CardMedia sx={{ height: 400 }} image={myImage} title="Henry Green" />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Henry James Green
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An aspiring frontend developer
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
