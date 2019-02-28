import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { compose } from "recompose";
import { withRouter, Link as RouterLink } from "react-router-dom";
import {
  Paper, Grid, List, ListItem, Card, CardContent, CardHeader, CardMedia, Typography, Backdrop, Button, Divider, Link, Stepper, Toolbar, withWidth,
  Fade, Slide, AppBar
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import themeStyles from "./projects.style";
import scss from "./projects.module.scss";

import logoImage from "../../assets/images/logo-terminal/logo_transparent_terminal.png";


const Projects = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === "xs" ? "column" : "row";

  return (
    <div className={ classes.root }>
      <Grid item xs={ 8 } className={ classNames(classes.background, scss.transition) }>
        <Grid container direction={ "column" }>
          <NavBar {...props} />
          <Grid item className={ classes.content }>

          </Grid>
          <Grid item className={ classes.footer }>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

function NavBar(props) {
  const { width, classes } = props;
  const panelDirection = width === "xs" ? "column" : "row";


  return (
    <nav>
      <Grid container direction={"row"} spacing={16} alignContent={"flex-start"} justify={"center"} className={scss.appBar}>
        <Grid item>

        </Grid>
      </Grid>
    </nav>
  );

 /* return (
    <AppBar color={ "secondary" } position={ "sticky" } elevation={ 0 } className={ scss.appBar }>
      <Toolbar variant={ "regular" } className={scss.toolbar}>
        <Grid item xs={ 8 }>
          <Grid container direction={ "row" } spacing={ 16 } alignContent={ "flex-start" } alignItems={ "flex-start" } justify={ "flex-start" }>
            <Grid item>
              <Grid container direction={ "column" } alignItems={ "center" } alignContent={ "center" } justify={ "space-around" }>
                <div className={ scss.navButtonBar } />
                <Link component={ RouterLink } noWrap type={ "button" } className={ classes.navButton } aria-label={ "Home Link" } to={ "/" } variant={ "body2" } onClick={ () => {console.log("Clicked home");} }>Home</Link>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction={ "column" } alignItems={ "center" } alignContent={ "center" } justify={ "space-around" }>
                <div className={ scss.navButtonBar } />
                <Link component={ RouterLink } noWrap type={ "button" } className={ classes.navButton } aria-label={ "Contact Link" } to={ "/contact" } variant={ "body2" } onClick={ () => {console.log("Clicked Contact");} }>Contact</Link>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction={ "column" } alignItems={ "center" } alignContent={ "center" } justify={ "space-around" }>
                <div className={ scss.navButtonBar } />
                <Link component={ RouterLink } noWrap type={ "button" } className={ classes.navButton } aria-label={ "About Me Link" } to={ "/about-me" } variant={ "body2" } onClick={ () => {console.log("Clicked About Me");} }>About</Link>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction={ "column" } alignItems={ "center" } alignContent={ "center" } justify={ "space-around" }>
                <div className={ scss.navButtonBar } />
                <Link component={ RouterLink } noWrap type={ "button" } className={ classes.navButton } aria-label={ "Blog Link" } to={ "/blog" } variant={ "body2" } onClick={ () => {console.log("Clicked Blog");} }>Blog</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );*/
}

Projects.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(NavBar);

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
