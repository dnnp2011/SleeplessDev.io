import { Fade, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { FaExclamationTriangle } from "react-icons/fa";


function WarningSign(props) {
  return (
    <Fade in={true} timeout={500}>
      <Grid container direction={ "column" } alignContent={ "center" } justify={ "center" } alignItems={ "center" } spacing={ 16 }>
        <Grid item style={ { marginTop: "25vh" } }>
          <Grid container direction={ "row" } spacing={ 0 } alignContent={ "center" } justify={ "center" }>
            <Grid item>
              <FaExclamationTriangle color={ "#D94730" } size={ 100 } />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant={ "h5" }>
            { props.label }
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  );
}

WarningSign.propTypes = {
  label: PropTypes.string.isRequired,
};

export default WarningSign;