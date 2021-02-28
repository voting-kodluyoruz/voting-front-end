import React, { useRef, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import { motion } from "framer-motion";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import { useTranslation } from "react-i18next";

const Profile = () => {
  //CSS
  const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: 20
    },

    form: {
      width: "100%",
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(4, 0, 3)
    }
  }));
  const classes = useStyles();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const { t } = useTranslation();

  /* SUBMIT */
  function handleSubmit(event) {
    event.preventDefault();

    const signUpFirstName = firstName.current.value;
    const signUpLastName = lastName.current.value;
    const signUpEmail = email.current.value;
    const signUpPassword = password.current.value;

    const signUpObj = {
      firstName: signUpFirstName,
      lastName: signUpLastName,
      email: signUpEmail,
      password: signUpPassword
    };

    console.log(signUpObj); //Get Values from SignUp page inputs
  }
  useEffect(() => {
    const name = localStorage.getItem("name")
    firstName.current.value=name;
    const surname = localStorage.getItem("surname")
    lastName.current.value=surname;
    const emailStorage = localStorage.getItem("email")
    email.current.value=emailStorage;
  },[])
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <Formik
        className={classes.root}
        initialValues={{
          email: "",
          password: "",
          rememberMe: false
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
                  className={classes.root}
                  component={TextField}
                  inputRef={firstName}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label={t("Profile.1")}
                  autoFocus
                  inputProps={{
                    maxLength: 12,
                    minLength: 3
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  className={classes.root}
                  component={TextField}
                  inputRef={lastName}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label={t("Profile.2")}
                  name="lastName"
                  autoComplete="lname"
                  inputProps={{
                    maxLength: 12,
                    minLength: 3
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  className={classes.root}
                  component={TextField}
                  inputRef={email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t("Profile.3")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  className={classes.root}
                  component={TextField}
                  inputRef={password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label={t("Profile.4")}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{
                    maxLength: 12,
                    minLength: 6
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  className={classes.root}
                  component={TextField}
                  inputRef={password}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label={t("Profile.5")}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{
                    maxLength: 12,
                    minLength: 6
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
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                className={(classes.color, classes.submit)}
                style={{backgroundColor:"#1e88e5", color: "#fff"}}
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<BorderColorOutlinedIcon />}
                onClick={submitForm}
              >
                {t("Profile.button")}
              </Button>
            </motion.div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
