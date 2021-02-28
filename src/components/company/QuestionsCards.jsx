import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import sampleQuestions from "../../data/sampleQuestions";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { motion } from "framer-motion";
import fakeData from '../../data/fakeData'
import alertify from 'alertifyjs'
import { useTranslation } from "react-i18next";
 

const QuestionCards = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#eef3f4",
      marginBottom: 50,
      "&:hover": {
        boxShadow: "0 3px 3px 0px rgba(0,0,0,0.8)",
      },
      borderRadius: 15
    },
    title: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto",
      textAlign: "justify"
    },
    image: {
      width: 300,
      height: 230,
      border: "1.5px solid black",
      borderRadius: 10,
      marginLeft: 5
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }));
  const classes = useStyles(); /* CSS */

  const [value, setValue] = React.useState([]);
  const [comp, setComp] = React.useState({})
  //const [hover, setHover] = React.useState(-1);
  const params = useParams();
  const [currentCards, setCurrentCards] = React.useState([]);
  const { t } = useTranslation([]);

  useEffect(() => {
    /* fetch("http://localhost:5000/companies")
     .then(response=>response.json())
     .then(data=>{*/
       fakeData.filter(companies=>companies.id==params.companyID)
       .map(company=>{
        setComp(company)
       })
    // })
  }, [])

  function handleSubmit(array) {
   // console.log(array)
    
    // if(array[0] === undefined || array[1] === undefined || array[2] === undefined 
    //   || array[3] === undefined || array[4] === undefined ){
    //     alertify.error('Rating is Fail');
    // }
    if(array.length < 5) {
      alertify.error('Rating is Fail');
    }
    else{
      const obj = {
        isim:comp.company,
        sehir:comp.location,
        oy_1:array[0].rate,
        oy_2:array[1].rate,
        oy_3:array[2].rate,
        oy_4:array[3].rate,
        oy_5:array[4].rate
      }
      fetch("http://localhost:5000/companies", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj) // body data type must match "Content-Type" header
      });
      alertify.success('Rating is Successful');
      window.location.replace(`/home`);
    }

    // const obj = {
    //   isim:comp.company,
    //   sehir:comp.location,
    //   oy_1:array[0].rate,
    //   oy_2:array[1].rate,
    //   oy_3:array[2].rate,
    //   oy_4:array[3].rate,
    //   oy_5:array[4].rate
    // }
    // console.log(obj)
    // fetch("http://localhost:5000/companies", {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(obj) // body data type must match "Content-Type" header
    // });

    //, oy_2, oy_3,oy_4,oy_5
  }

  return (
    <>
      <Grid container style={{ justifyContent: "center" }}>
        {t("CompanyPage.card",{ returnObjects: true }).map((question, index) => (
          <Grid item lg={11} md={9} sm={10} xs={12} key={question.id}>
            <Card className={classes.root}>
              <Grid container>
                <Grid item>
                  <CardMedia
                    className={classes.image}
                    image={question.img}
                    title="Company Logo"
                  />
                </Grid>

                <Grid item>
                  <Grid item>
                    <CardContent className={classes.content}>
                      <Typography component="h5" color="primary" variant="h5">
                         {question.category}
                      </Typography>

                      <Typography variant="h6">{question.q}</Typography>
                    </CardContent>
                  </Grid>

                  <Grid item>
                    <Box
                      component="fieldset"
                      mb={2}
                      style={{ marginLeft: 10 }}
                      borderColor="transparent"
                    >
                      <Typography
                        color="primary"
                        component="legend"
                        variant="subtitle2"
                      >
                        {question.subTitle}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                        component="fieldset"
                        borderColor="transparent"
                      >
                        <Rating
                          name={String(index)}
                          size="large"
                          value={value[index] ? null : value[index]}
                          precision={0.5}
                          onChange={(event, newValue) => {
                            if (value[index]) {
                              let newArr = [...value];
                              newArr[index] = { id: index, rate: newValue };
                              setValue(newArr);
                            } else {
                              setValue([
                                ...value,
                                { id: index, rate: newValue }
                              ]);
                            }
                          }}
                          // onChangeActive={(event, newHover) => {
                          //   setHover(newHover);
                          // }}
                          emptyIcon={<StarIcon fontSize="inherit" />}
                        />
                        {/* 
                        {value !== null && (
                          <Box sx={{ ml: 5 }}>
                            {labels[hover !== -1 ? hover : value]}
                          </Box>
                        )} */}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container style={{ justifyContent: "center", marginBottom: 20 }}>
        <Grid item>
          <motion.div
            className="animatable"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => {
                handleSubmit(value);                
              }}
              style={{
                padding: 10,
                backgroundColor: "#1e88e5",
                color: "#fff"
              }}
              startIcon={<SendIcon />}
            >
              {t("CompanyPage.button.text")}
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </>
  )
}

export default QuestionCards;
