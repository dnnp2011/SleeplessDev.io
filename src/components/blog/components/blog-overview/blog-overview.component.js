import { Grid, List, ListItem, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";

import BlogCard from "../blog-card/blog-card.component";
import themeStyles from "./blog-overview.theme.style";


class BlogOverview extends Component {
  state = {};


  render() {
    const { classes } = this.props;

    return (
      <Grid spacing={ 32 } container direction='column' alignItems='center' justify='center' className={ classes.blogCardList }>
        <List className={ classes.list }>
          <ListItem disableGutters>
            <Grid item>
              <BlogCard />
            </Grid>
          </ListItem>
          <ListItem disableGutters>
            <Grid item>
              <BlogCard />
            </Grid>
          </ListItem>
          <ListItem disableGutters>
            <Grid item>
              <BlogCard />
            </Grid>
          </ListItem>
          <ListItem disableGutters>
            <Grid item>
              <BlogCard />
            </Grid>
          </ListItem>
          <ListItem disableGutters>
            <Grid item>
              <BlogCard />
            </Grid>
          </ListItem>
        </List>
      </Grid>
    );
  }
}


BlogOverview.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(BlogOverview);