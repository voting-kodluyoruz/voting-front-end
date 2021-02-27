import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end"
  }
}));

export default function Footer() {
  // classes created because it is needed in the footer.
  const classes = useStyles();
  const { t } = useTranslation();
  
  return (
    <Container className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
      {t("Footer.text")}
        <Link color="inherit" to="/home">
          VOTING {" "}
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
}
