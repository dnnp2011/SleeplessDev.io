import { Divider, Grid, List, ListItem, ListItemText, Typography, withStyles, withWidth } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./temp-drawer-widget.theme.style";
import LinkListWidget from "../link-list-widget/link-list-widget.component";


class TempDrawerWidget extends Component {
  render() {
    const { classes, drawerOpen, toggleDrawer } = this.props;

    return (
      <Grid spacing={ 0 } container direction='row' alignItems='center' justify='center'>
        <Drawer anchor='right' open={ drawerOpen } onClose={ toggleDrawer } className={ classes.drawer }>
          <div className={ classes.list }>
            { this.props.render }
          </div>
        </Drawer>
      </Grid>
    );
  }
}


TempDrawerWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(TempDrawerWidget);