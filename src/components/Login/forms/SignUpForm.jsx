import React, { useRef } from "react";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import TextField from "@material-ui/core/TextField";
import { Button, LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import { motion } from "framer-motion";

const SignUpForm = () => {
  //CSS
  const useStyles = makeStyles((theme) => ({
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(4, 0, 3),
    },
  }));
  const classes = useStyles();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  /* SUBMIT */
  function handleSubmit(event) {
    event.preventDefault();

    const signUpFirstName = firstName.current.value;
    const signUpLastName = lastName.current.value;
    const signUpEmail = email.current.value;
    const signUpPassword = password.current.value;

    const signUpObj = {
      name: signUpFirstName,
      surname: signUpLastName,
      email: signUpEmail,
      password: signUpPassword,
    };
    fetch("https://voting-back-end.herokuapp.com/users", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(signUpObj) // body data type must match "Content-Type" header
    });
    localStorage.setItem("user",true)
    localStorage.setItem('id',1)
    localStorage.setItem('name',signUpFirstName)
    localStorage.setItem('surname',signUpLastName)
    localStorage.setItem('email',signUpEmail)
    window.location.replace(`/home`);
  }
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  inputRef={firstName}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputProps={{
                    maxLength: 12,
                    minLength: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  inputRef={lastName}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  inputProps={{
                    maxLength: 12,
                    minLength: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  inputRef={email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  inputRef={password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{
                    maxLength: 12,
                    minLength: 6,
                  }}
                />
              </Grid>
            </Grid>
            {isSubmitting && <LinearProgress />}
            <br />
            <motion.div
              className="animatable"
              whileHover={{
                scale: 1.0,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<LockOpenRoundedIcon />}
                className={classes.submit}
                onClick={submitForm}
              >
                Sign Up
              </Button>
            </motion.div>
            <Grid container justify="flex-start">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
