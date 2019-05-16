import withWidth from "@material-ui/core/withWidth/withWidth";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";

import themeStyles from "./index.style";
import scss from "./index.module.scss";

import logoImage from "../../assets/images/logo-terminal/logo_transparent_terminal.png";


const LandingPage = (props) => {
  const {
    classes,
  } = props;

  return (
    <Grid
      container
      direction='row'
      spacing={ 0 }
      justify='center'
      alignItems='center'
      className={ classes.background }>
      <Grid item sm={ 10 } xs={ 12 } className={ scss.panel }>
        <Paper className={ classNames(scss.paper, classes["primary-paper"]) }>
          <CardContent className={ scss["landing-page-content"] }>
            <img src={ logoImage } className={ scss["landing-page-logo"] } alt='logo' />
            <Typography variant='h5' gutterBottom>Welcome!</Typography>
            <Typography variant='body1'>
              My name is Dalton, I'm the developer behind SleeplessDev.io! I worked hard to create an aesthetically pleasing and functionally smooth experience. You'll find other examples of my work, my resume, how to get in touch, and my blog. Some aspects of this site are still under development.
            </Typography>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(LandingPage);