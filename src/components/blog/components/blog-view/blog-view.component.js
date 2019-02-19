import { Grid, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./blog-view.theme.style";


class BlogView extends Component {
  state = {};


  render() {
    const { classes } = this.props;

    return (
      <Grid spacing={ 0 } container direction='row' alignItems='center' justify='center'>
		      </Grid>
    );
  }
}


BlogView.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(BlogView);