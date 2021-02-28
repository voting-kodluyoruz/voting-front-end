import React, {useEffect} from "react";
import aboutData from "../../data/aboutData";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const About = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#eef3f4",
      marginBottom: 15,
      marginTop: 15,
      "&:hover": {
        boxShadow: "0 3px 3px 0px rgba(0,0,0,0.8)",
      },
      borderRadius: 15,
    },
    content: {
      flex: "1 0 auto",
      textAlign: " justify",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();
  const { t } = useTranslation([]);
  return (
    <>
      <Grid data-aos="zoom-in"
        style={{ justifyContent: "center" }}
        container
      >
        {t("About",{ returnObjects: true }).map((aboutt, index) => (
          <Grid item xl={9} lg={10} md={9} sm={12} xs={12} key={aboutt.id}>
            <Card className={classes.root}>
              <Grid container spacing={1} style={{ justifyContent: "center" }}>
                <Grid item xl={6} lg={12} md={8} sm={12}>
                  <Grid item>
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.controls}
                        component="h5"
                        color="primary"
                        variant="h5"
                      >
                        {aboutt.title}
                      </Typography>

                      <Typography variant="h6">
                      {aboutt.text}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default About;
