import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import sign_in from "../../assets/images/sign_in.jpg";
import SignInForm from "./forms/SignInForm";
import logo from "../../assets/images/logo.svg";

/* CSS */
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${sign_in})`,
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
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
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
export default function SignIn() {
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
        data-aos="flip-left"
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <img src={logo} style={{ width: 120 }} alt="Logo" />

          <Typography style={{ marginBottom: 10 }}  component="h4" variant="h4">
            Welcome to VOTING
          </Typography>

          <Typography component="h1" variant="h5">
            <LockOutlinedIcon />
            Sign In
          </Typography>

          <SignInForm />

          <Grid container>
            <Grid item style={{ marginTop: 15 }}>
              <Link to="sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={15}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
