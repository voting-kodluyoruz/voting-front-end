import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    margin: 40,
    backgroundColor: "#eef3f4",
    borderRadius: 15,
    "&:hover": {
      boxShadow: "0 5px 3px 0px rgba(0,0,0,0.8)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  avatar: {
    width: 150,
    height: 150,
    margin: 10,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paginations: {
    display: "flex",
    marginBottom: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const CompanyCards = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid container data-aos="zoom-in">
      {props.cards.map((company, index) => (
        <Grid item xl={3} lg={4} md={6} sm={8} xs={12} key={index}>
          <Card className={classes.root} key={index}>
            <Grid container>
              <Grid item>
                <Link to={`/company/${company._id}`}>
                  <Avatar
                    alt="Company Logo"
                    src={`https://img.icons8.com/plasticine/452/company.png`}
                    className={classes.avatar}
                  />
                </Link>
              </Grid>
              <Grid item>
                <CardContent className={classes.content}>
                  <Link
                    to={`/company/${company._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography component="h5" variant="h5">
                      {company.company}
                    </Typography>
                  </Link>
                  <Grid item style={{display:"flex", flexDirection: "row",marginTop:15}}>
                    <LocationOnTwoToneIcon />
                    <Typography variant="subtitle1" color="textSecondary">
                      {company.location}
                    </Typography>
                  </Grid>
                </CardContent>
                <div className={classes.controls}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">{t("Companies.stars")}</Typography>
                    <Rating
                      size="large"
                      name="read-only"
                      readOnly
                      precision={0.5}
                      value={company.NumberOfStar}
                    />
                  </Box>
                </div>
              </Grid>
              <Grid container className={classes.footer}>
                <Grid item>
                  <Typography variant="subtitle2" color="textSecondary">
                  {t("Companies.description")}
                  </Typography>
                  <CardActions>
                    <Link
                       to={`/company/${company.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <motion.div
                        className="animatable"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          style={{
                            padding: 10,
                            backgroundColor: "#1e88e5",
                            color: "#fff",
                          }}
                          startIcon={<ThumbsUpDownIcon />}
                        >
                          {t("Companies.button")}
                        </Button>
                      </motion.div>
                    </Link>
                  </CardActions>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyCards;
