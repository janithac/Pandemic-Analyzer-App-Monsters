import React from 'react';
import headerBackgroundImage from '../assets/images/bg.jpg';
import { Grid, Button, makeStyles, Typography, Container, useMediaQuery } from '@material-ui/core';
import Navbar from '../components/navbar';

const useStyles = makeStyles((theme) => ({
  slider: {
    backgroundColor: "tranparent",
    padding: "200px"

  },
  sliderSection: {
    zIndex: "1000"
  },
  sliderInnerSection: {
    padding: "9px",
    marginTop: "1em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.1em"
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  sliderTitle: {

    marginTop: "0em",
    fontWeight: "600",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
      marginTop: "2em"
    }
  },
  sliderParagraph: {
    fontSize: "1.5em",
    color: "white",
    lineHeight: "1.5",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em"
    }
  },
  carouselImage: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      left: "0",
      opacity: "0"
    }
  },
  headerBackground: {
    backgroundColor: "#9c36b5",
    backgroundImage: `url(${headerBackgroundImage})`,
    backgroundSize: "cover",

  }
}))

export default function HeaderSlider() {
  const classes = useStyles();
 
  return (
   
    <div className={classes.headerBackground}>
        <Navbar/>
        <div className={classes.slider}>
          <Container>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} className={classes.sliderSection} style={{ textAlign: "center" }}>
                {/* <img alt="carousel-image-01" className={classes.carouselImage} src={images[0].image} /> */}
              </Grid>
              <Grid item xs={12} sm={6} className={classes.sliderSection}>
                <Grid container>
                  <Grid item sm={12} className={classes.sliderInnerSection} style={{ marginTop: "2" }}>
                    <Typography variant="h2" className={classes.sliderTitle} >Pandemic Analyzer</Typography>
                  </Grid>
                  <Grid item sm={12} className={classes.sliderInnerSection}>
                    <Typography variant="p" className={classes.sliderParagraph}>
                    This Application is  utilized to analyse the state of pandemic situation
                    </Typography>
                  </Grid>
                  {/* <Grid item sm={12} className={classes.sliderInnerSection}>
                    <Button className={classes.button}>Discover more</Button>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
   
     
    </div >
  )
}



