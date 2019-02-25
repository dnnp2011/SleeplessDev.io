import { Grid, ListItem, Typography, withStyles, withWidth } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./link-list-widget.theme.style";


const LinkListWidget = (props) => {
  const { classes, links } = props;

  return (
    <Grid container spacing={ 0 } direction={ "row" } alignItems={ "center" } justify={ "flex-end" }>
      <Grid item xs={ 12 }>
        <List component={ "nav" }>
          <Grid container direction={ "column" } alignItems={ "center" } justify={ "space-around" } className={ classes.listPanel }>
            {
              props.links
              ? props.links.map((link, index) => {
                return (
                  <ListItemLink key={ link.label || index } label={ link.label } { ...link.props } />
                );
              })
              : <Typography variant={ "h6" } gutterBottom>No Links Received</Typography>
            }
          </Grid>
        </List>
      </Grid>
    </Grid>
  );
};

const ListItemLink = (props) => {
  return (
    <ListItem button component={ "a" } { ...props }>
      {/*<ListItemText component={ "h4" } primary={ props.label } />*/}
      <Typography variant={"h5"} style={{padding: "10px"}}>
        { props.label }
      </Typography>
    </ListItem>);
};

LinkListWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LinkListWidget);