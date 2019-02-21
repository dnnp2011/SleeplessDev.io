import { Grid, List, ListItem, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import classNames from 'classnames';
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./blog-overview.theme.style";

import BlogCard from "../blog-card/blog-card.component";


class BlogOverview extends Component {
  state = {};


  render() {
    const { classes } = this.props;

    return (
      <Grid spacing={ 32 } container direction='column' alignItems='center' justify='center' className={ classNames(classes.blogCardList, 'portal-hide-scrollbars') }>
        <List component={"nav"} className={classNames(classes.list, "portal-hide-scrollbars")}>
          <ListItem disableGutters >
            <Grid item>
              <BlogCard />
            </Grid>
          </ListItem>
          <ListItem disableGutters >
                     <Grid item>
                       <BlogCard />
                     </Grid>
                   </ListItem>
          <ListItem disableGutters >
                     <Grid item>
                       <BlogCard />
                     </Grid>
                   </ListItem>
          <ListItem disableGutters >
                     <Grid item>
                       <BlogCard />
                     </Grid>
                   </ListItem>
          <ListItem disableGutters >
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