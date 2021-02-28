import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import sign_up from "../../assets/images/sign_up.jpeg";
import SignUpForm from "./forms/SignUpForm";
import logo from "../../assets/images/logo.svg";

//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${sign_up})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

/* Footer */
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="#goSomewhere">
        VOTING{" "}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function SignUp() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={classes.image}
        data-aos="flip-right"
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        data-aos="flip-left"
      >
        <div className={classes.paper}>
          <img src={logo} width="120" alt="LOGO" />
          <Typography component="h1" variant="h5" >
            <LockOutlinedIcon/> Sign Up
          </Typography>
          <FormHelperText id="my-helper-text" style={{ marginBottom: 10 }}>
            We'll never share your email.
          </FormHelperText>

          <SignUpForm /> {/*  SignupForm Component */}
          
        </div>
        <Box>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
