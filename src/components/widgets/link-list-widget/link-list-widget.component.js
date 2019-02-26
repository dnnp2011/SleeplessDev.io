import { Grid, ListItem, Typography, withStyles, withWidth } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./link-list-widget.theme.style";


const LinkListWidget = (props) => {
  const { classes, links } = props;

  return (
    <Grid container spacing={ 0 } direction={ "row" } alignItems={ "center" } justify={ "flex-end" }>
      <Grid item xs={ 12 }>
        <Paper elevation={2} className={ classes.listPanel }>
          <List component={ "nav" }>
                    <Grid container direction={ "column" } alignItems={ "center" } justify={ "space-around" }>
                      {
                        props.links
                        ? props.links.map((link, index) => {
                          let { label, ...rest } = link;
                          return (
                            <ListItemLink key={ label || index } label={ label } { ...rest } />
                          );
                        })
                        : <Typography variant={ "h6" } gutterBottom>No Links Received</Typography>
                      }
                    </Grid>
                  </List>
        </Paper>
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