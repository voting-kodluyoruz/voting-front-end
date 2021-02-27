import React, { useEffect } from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "./ListItems";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import CompaniesPage from "./company/CompaniesPage";
import CompanyPage from "./company/CompanyPage";
import Team from "./contact/Team";
import About from "./About/About";
import Copyright from "./footer/Footer";
import Search from "./Search";
import PopularCompanies from "./popular-companies/PopularCompanies";
import NotFound from "./not_found_404/NotFound";
import logo from "../assets/images/logo.svg";
import Home from "./home/Home";
import Profile from "./Profile/Profile";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ListIcon from '@material-ui/icons/List';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 20px",
    ...theme.mixins.toolbar,
  },
  Avatar: {
    marginLeft: theme.spacing(1),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: 0,
    paddingRight: 0,
  },
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Dashboard() {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.replace(`/`);
    }
  }, []);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [, setWidth] = React.useState(50);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { t } = useTranslation();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setWidth(120);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setWidth(50);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          localStorage.removeItem("id");
          localStorage.removeItem("user");
          localStorage.removeItem("name");
          localStorage.removeItem("surname");
          localStorage.removeItem("email");
          window.location.replace(`/`);
        }}
      >
        {t("Dashboard.2")}
      </MenuItem>

      <MenuItem>
        <Button
          onClick={() => handleClick("en")}
          style={{ backgroundColor: "#eef3f4" }}
        >
          <img src="https://img.icons8.com/emoji/20/000000/united-kingdom-emoji.png"/>
        </Button>
      </MenuItem>

      <MenuItem>
        <Button
          onClick={() => handleClick("tr")}
          style={{ backgroundColor: "#eef3f4" }}
        >
          <img src="https://img.icons8.com/emoji/20/000000/turkey-flag-emoji.png"/> 
        </Button>
      </MenuItem>

    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={handleProfileMenuOpen}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon  style={{ backgroundColor: "#eef3f4" }}/>
        </IconButton>
      </MenuItem>

      <MenuItem>
        <Button
          onClick={() => handleClick("en")}
          style={{ backgroundColor: "#eef3f4" }}
        >
          <img src="https://img.icons8.com/emoji/20/000000/united-kingdom-emoji.png"/>
        </Button>
      </MenuItem>

      <MenuItem>
        <Button
          onClick={() => handleClick("tr")}
          style={{ backgroundColor: "#eef3f4" }}
        >
          <img src="https://img.icons8.com/emoji/20/000000/turkey-flag-emoji.png"/> 
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#1e88e5" }}
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={t("Dashboard.1")}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onKeyPress={(e) => {
                  if (e.key == "Enter") {
                    window.location.replace(`/search?q=${e.target.value}`);
                  }
                }}
              />
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ListIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            {/* LOGO */}
            <div className={classes.logo}>
              <Link
                activeclassname="is-active"
                style={{ color: "black", textDecoration: "none" }}
                to="/home"
              >
                <img src={logo} alt="LOGO" style={{ width: 50 }} />
              </Link>
              <Typography component="h5" color="primary" variant="h5">
                VOTING
              </Typography>
            </div>

            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems()}</List>
          <Divider />
          <List>{secondaryListItems()}</List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Paper className={classes.paper}>
                  <Switch>
                    <Route path="/home">
                      <Home />
                    </Route>
                    <Route path="/search">
                      <Search />
                    </Route>
                    <Route path="/companies">
                      <CompaniesPage />
                    </Route>

                    <Route path="/company/:companyID">
                      <CompanyPage />
                    </Route>

                    <Route path="/popular-companies">
                      <PopularCompanies />
                    </Route>

                    <Route path="/about">
                      <About />
                    </Route>

                    <Route path="/profile">
                      <Profile />
                    </Route>

                    <Route path="/contact">
                      <Team />
                    </Route>

                    <Route path="*">
                      <Redirect exact to="/404" />
                      <NotFound />
                    </Route>
                  </Switch>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Copyright />
        </main>
      </div>
    </Router>
  );
}
