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
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

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
            Contact me at{" "}
            <a href="mailto:henryjamesgreen92@gmail.com">
              henryjamesgreen92@gmail.com
            </a>{" "}
            , or simply fill out this form!
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "10px", marginBottom: "100px" }}
      >
        <Grid item>
          <a href="./images/henryjamesgreenresume.pdf" target="_blank">
            <FaFilePdf
              className="icons pdf"
              style={{ fontSize: 150, color: "White" }}
            />
          </a>
        </Grid>

        <Grid item>
          <a href="https://github.com/HenryJamesGreen" target="_blank">
            <FaGithub
              className="icons youtube"
              style={{ fontSize: 150, color: "White" }}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/henryjamesgreen/"
            target="_blank"
          >
            <FaLinkedin
              className="icons linkedin"
              style={{ fontSize: 150, color: "White" }}
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
