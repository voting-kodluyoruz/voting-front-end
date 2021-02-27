import React from "react";
import teamData from "../../data/teamData";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <>
        <Grid item>
          <Typography
            component="h4"
            variant="h4"
            color="primary"
            style={{ textAlign: "center", marginTop: 10 }}
          >
           {t("ContactUs.title")}
          </Typography>
        </Grid>

        <Grid item data-aos="zoom-in">
          <div className="container">
            <div className="row">
              {teamData.map((card, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-12 col-md-6 col-lg-6"
                >
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        alt="avatar"
                        src={card.avatar}
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name"> {card.name} </h3>
                      <h4 className="title"> {card.job} </h4>
                    </div>
                    <ul className="social">
                      <li>
                        <a
                          style={{ padding: 15, borderRadius: 15 }}
                          href={card.github}
                          className="fa fa-github"
                          aria-hidden="true"
                        >
                          <GitHubIcon />
                        </a>
                      </li>

                      <li>
                        <a
                          style={{ padding: 15, borderRadius: 15 }}
                          href={card.linkedin}
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        >
                          <LinkedInIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
 
    </>
  );
};

export default Team;
