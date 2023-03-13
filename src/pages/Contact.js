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
import { TextField } from "@mui/material";
import { Email } from "@mui/icons-material";

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
        columns={{ xs: 12, sm: 6, md: 4 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <a href="https://github.com/HenryJamesGreen" target={"_blank"}>
            <Item>GitHub</Item>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            href="https://www.linkedin.com/in/henryjamesgreen/"
            target={"_blank"}
          >
            <Item>linkedin</Item>
          </a>
        </Grid>
      </Grid>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <Typography
            gutterBotom
            color="secondary"
            variant="body2"
            component="p"
          >
            Fill out the form and I'll get back to you as soon as possible!
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name."
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email."
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Phone"
                  placeholder="Enter phone number."
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="message"
                  multiline
                  rows={4}
                  laceholder="Type your message here."
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;
