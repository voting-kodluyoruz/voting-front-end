import React from "react";
import not_found from "../../assets/images/not_found.gif";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {useTranslation} from 'react-i18next'

const NotFound = () => {
  const style_404 = {
    display: "flex",
    justifyContent: "center",
    fontSize: 25,
    color: "#161a1a",
  };
 const {t} = useTranslation();
  return (
    <>
      <div style={style_404}>
        <h1> {t("NotFound.text")} </h1>
      </div>
      <div style={style_404}>
        <img src={not_found} alt="Page is NOT FOUND" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <Link to="/home" 
          style={{ textDecoration: "none",}}>
          <Button startIcon={<HomeIcon/>} 
          style={{backgroundColor:"#1e88e5", color:"#fff"}}
           variant="contained" >
            Go Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
 