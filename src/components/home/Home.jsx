import React, {useState, useEffect} from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import BusinessTwoToneIcon from "@material-ui/icons/BusinessTwoTone";

const Home = (props) => {
  const [datas, setDatas] = useState([])
  useEffect(() =>fetch("https://voting-back-end.herokuapp.com/companies")
      .then(response=>response.json())
      .then(data=>setDatas(data.reverse()))
  ,[])
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#eef3f4",
      marginBottom: 10,
      marginTop: 10,
      "&:hover": {
        boxShadow: "0 3px 3px 0px rgba(0,0,0,0.8)",
      },
      borderRadius: 15
    },
    controls: {
      display: "flex",
      textAlign: " justify"
    },
    blue: {
      backgroundColor: "#03A9F4"
    }
  }));
  const classes = useStyles();

  return (
    <Grid container className={classes.controls}>
      <Grid container style={{ justifyContent: "center" }}>
        {datas.map((comment, index) => (
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12} key={comment._id}>
            <Card className={classes.root}>
              <Grid lg={12} md={12} sm={12} xs={8}>
                <CardContent className={classes.controls}>
                  <Grid
                    item
                    style={{ paddingRight: 5 }}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={8}
                  >
                    <Avatar className={classes.blue}>
                      V
                    </Avatar>

                  </Grid>
                  <Grid
                    item
                    style={{ marginLeft: 15 }}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={8}
                  >
                    <Typography>
                      <BusinessTwoToneIcon style={{ paddingRight: 5 }} />
                      {comment.isim} <br />
                      <div style={{ marginTop: 10 }}>
                        <LocationOnTwoToneIcon style={{ paddingRight: 5 }} />
                        {comment.sehir}
                      </div>
                      {/* comment.location */}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    style={{ marginLeft: 5 }}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={8}
                  >
                    <Rating
                      size="medium"
                      name="read-only"
                      precision={0.5}
                      value={`${(parseFloat(comment.oy_1)+parseFloat(comment.oy_2)+parseFloat(comment.oy_3)+parseFloat(comment.oy_4))/4}`}
                      readOnly
                    />
                  </Grid>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
