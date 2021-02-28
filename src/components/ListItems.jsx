import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BarChartIcon from "@material-ui/icons/BarChart";
import StarIcon from "@material-ui/icons/Star";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const mainListItems = (props) => {

  const { t } = useTranslation();

  return (
    <>
      <div>
        {/* Home */}
        <Link
          activeclassname="is-active"
          style={{ color: "black", textDecoration: "none" }}
          to="/home"
        >
          <ListItem button style={{ padding: 15 }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.1")} />
          </ListItem>
        </Link>
        {/* Companies */}
        <Link
          activeclassname="is-active"
          style={{ color: "black", textDecoration: "none" }}
          to="/companies"
        >
          <ListItem button style={{ padding: 15 }}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.2")}  />
          </ListItem>
        </Link>
        {/* Popular Companies */}
        <Link
          activeclassname="is-active"
          style={{ color: "black", textDecoration: "none" }}
          to="/popular-companies"
        >
          <ListItem button style={{ padding: 15 }}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.3")}  />
          </ListItem>
        </Link>
      </div>
    </>
  );
};

const secondaryListItems = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        {/* Profile */}

        <Link
          activeclassname="is-active"
          style={{ color: "black", textDecoration: "none" }}
          to="/profile"
        >
          <ListItem button style={{ padding: 15 }}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.4")} />
          </ListItem>
        </Link>
        {/* About Us */}
        <Link
          activeclassname="is-active"
          style={{ color: "black", textDecoration: "none" }}
          to="/about"
        >
          <ListItem button style={{ padding: 15 }}>
            <ListItemIcon>
              <FilterNoneIcon />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.5")} />
          </ListItem>
        </Link>
        {/* Contact Us */}
        <Link
          activeclassname="is-active"
          style={{ color: "black", textDecoration: "none" }}
          to="/contact"
        >
          <ListItem button style={{ padding: 15 }}>
            <ListItemIcon>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.6")} />
          </ListItem>
        </Link>
      </div>
    </>
  );
};

export {
  mainListItems,
  secondaryListItems
}