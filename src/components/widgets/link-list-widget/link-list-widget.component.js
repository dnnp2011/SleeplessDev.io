import { Grid, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./link-list-widget.theme.style";


const LinkListWidget = (props) => {
	const { classes } = props;
	
	return(
		<Grid container spacing={0} direction={'column'} alignItems='center' justify='center'>
		
		</Grid>
	);
};

LinkListWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LinkListWidget);