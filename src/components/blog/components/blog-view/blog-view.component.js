import { Grid, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import BlogPaper from "../blog-paper/blog-paper.component";
import themeStyles from "./blog-view.theme.style";


function BlogView(props) {
  const { classes } = props;

  return (
    <Grid spacing={ 0 } container direction='column' alignItems='center' justify='center'>
      <BlogPaper/>
    </Grid>
  );
}


BlogView.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(BlogView);