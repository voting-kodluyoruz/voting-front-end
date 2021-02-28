import React from "react";
import Typography from "@material-ui/core/Typography";
import { useParams, Link } from "react-router-dom";
import fakeData from "../../data/fakeData";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import QuestionCards from "./QuestionsCards";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import { useTranslation } from "react-i18next";
 
const CompanyPage = () => {
  const { companyID } = useParams();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
      margin: 40,
      backgroundColor: "#eef3f4",
      borderRadius: 15,
    },
    title: {
      textAlign: "center",
      margin: 10,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      width: 150,
      height: 150,
      margin: 10,
    },
  }));
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      {/* Page Title */}
      <Typography component="h4" variant="h4" color="primary"
      className={classes.title}>
        {t("CompanyPage.title")}
      </Typography>

      {/* Company Card */}
      <Grid container style={{ justifyContent: "center" }} data-aos="fade-in">
        {fakeData
          .filter((company) => company.id === Number(companyID))
          .map((company, index) => (
            <Grid item xl={3} md={6} xs={12} key={company.id}>
              <Card className={classes.root} >
                <Grid container>
                  <Grid item>
                    <Avatar
                      alt="Company Logo"
                      src={`https://img.icons8.com/plasticine/452/company.png`}
                      className={classes.avatar}
                    />
                  </Grid>
                  <Grid item>
                    <CardContent className={classes.content}>
                      <Link
                        to={`/company/${company.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography component="h5" variant="h5">
                          {company.company}
                        </Typography>
                      </Link>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 15,
                        }}
                      >
                        <LocationOnTwoToneIcon />
                        <Typography variant="subtitle1" color="textSecondary">
                          {company.location}
                        </Typography>
                      </Grid>
                    </CardContent>
                    <div className={classes.controls}>
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">{t("CompanyPage.stars")}</Typography>
                        <Rating
                          size="large"
                          name="read-only"
                          precision={0.5}
                          value={company.NumberOfStar}
                          readOnly
                        />
                      </Box>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
      </Grid>
      {/*End of Company Card */}

      {/* Question Cards */}
      <QuestionCards />
    </>
  );
};

export default CompanyPage;
