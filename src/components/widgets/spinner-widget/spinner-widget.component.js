import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import themeStyles from "./spinner-widget.theme.style";


const SpinnerWidget = (props) => {
  const {
    classes,
    loadingText
  } = props;

  return (
    <Grid container direction={"column"} spacing={16} justify={"center"} alignItems={"center"}>
      <Grid item>
        <CircularProgress className={ classes.progress } size={ 58 } aria-labelledby={loadingText} color={ "primary" } thickness={ 5 } />
      </Grid>
      {
        loadingText
        ?
        <Grid item>
          <Typography variant={"h6"} className={classes.loadingText}>
            { loadingText }
          </Typography>
        </Grid>
        : null
      }
    </Grid>
  );
};

SpinnerWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(SpinnerWidget);