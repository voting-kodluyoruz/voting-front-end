import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CompanyCards from "./company/CompanyCards";
import Pagination from "@material-ui/lab/Pagination";
import { Divider, Box } from "@material-ui/core";
import fakeData from '../data/fakeData'


export default function Search(props) {
  const [currentCards, setCurrentCards] = React.useState([]);
  const [err, setErr] = React.useState(false);
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const q = url.get("q");
  useEffect(() => {
    let query = q.charAt(0).toUpperCase() + q.slice(1);
    fakeData.map(data=>{
      if(data.company==query){
        setCurrentCards([data])
        setErr(false)
      }else{
        setErr(true)
      }
    })
    
  })
  return (
    <>
      <Typography
        component="h4"
        variant="h4"
        color="primary"
        style={{ textAlign: "center" }}
      >
        {q.charAt(0).toUpperCase() + q.slice(1)}
        <br/>
        <br/>
        {currentCards.length>0?"":"Maalesef öyle bir şirket bulamadık :("}
      </Typography>

      {/* Map Company Cards */}
      <CompanyCards cards={currentCards} />
    </>
  );
}
