import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

import themeStyles from "./projects.style";
import scss from "./projects.module.scss";

import logoImage from "../../assets/images/logo-terminal/logo_transparent_terminal.png";

const LandingPage = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === "xs" ? "column" : "row";

  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}>
      <Grid item sm={10} xs={12} className={scss.panel}>
        <Grid direction={panelDirection} container spacing={0}>
          <Paper className={classNames(scss.paper, classes["primary-paper"])}>
            <CardContent className={scss["landing-page-content"]}>
              <img src={logoImage} className={scss["landing-page-logo"]} alt="logo"/>
              <Typography variant='h5' gutterBottom>Hey There!</Typography>
              <Typography variant='body1'>My name is Dalton Pierce, the insomniac developer behind SleeplessDev! I worked hard to create an aesthetically pleasing, yet functional website
                that would be indicative of my skill as a developer. Whether you're an employer, prospective client, or a fellow developer, feel free to take a look around.
                You'll find other examples of my work, contact information, as well as a collection of developer reference material; A compilation of knowledge gathered through my experiences
                with Software Development, Networking and Firewalls, PC and Server Hardware, and more! Regardless of what brought you here, I hope you leave having learned something
                new!</Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LandingPage);
