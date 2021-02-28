import React, { useRef } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import { Switch } from "formik-material-ui";
import { motion } from "framer-motion";
import alertify from 'alertifyjs'

/* CSS */
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInForm = () => {
  const classes = useStyles();
  const [persons, setPersons]= React.useState([])
  const userEmail = useRef();
  const userPassword = useRef();
  /* Submit button */
  async function handleSubmit(event) {
    event.preventDefault();

    const email = userEmail.current.value;
    const password = userPassword.current.value;

    fetch("https://voting-back-end.herokuapp.com/users")
    .then(res=>res.json())
    .then(async data=>{
      await data.map(async person=>{
        if(person.email==email && person.password==password){
          if(localStorage.getItem('user')){
            localStorage.removeItem('id')
            localStorage.removeItem('user')
            localStorage.removeItem('name')
            localStorage.removeItem('surname')
            localStorage.removeItem('email')
          }
          setPersons(person)
          localStorage.setItem("user",true)
          localStorage.setItem('id',person._id)
          localStorage.setItem('name',person.name)
          localStorage.setItem('surname',person.surname)
          localStorage.setItem('email',person.email)
          alertify.success('Success!')
          window.location.replace("/home");
        }else{
          console.log("Something Wrong")
        }
    })
    if(!localStorage.getItem('user')){
      alertify.error('Something Wrong')
    }
  })
    userEmail.current.value = "";
    userPassword.current.value = "";
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
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        
        {({ submitForm, isSubmitting }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Field
              component={TextField}
              inputRef={userEmail}
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

            <Field
              component={TextField}
              inputRef={userPassword}
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={
                <Field component={Switch} type="checkbox" name="rememberMe" />
              }
              label="Remember me"
            />
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
                startIcon={<ExitToAppRoundedIcon />}
                className={classes.submit}
                disabled={isSubmitting}
                onClick={ ()=> { 
                  submitForm()
                }}
              >
                Sign In
              </Button>
            </motion.div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
