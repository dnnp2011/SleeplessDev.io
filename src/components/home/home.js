import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import logoImage from '../../assets/images/logo-terminal/logo_transparent_terminal.png';
import scss from './home.module.scss';

import themeStyles from './home.style';


const LandingPage = props => {
  const { classes,
    width } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      container
      direction='row'
      spacing={0}
      justify='center'
      alignItems='center'
      className={classes.background}>
      <Grid item sm={10} xs={12} className={scss.panel}>
        <Grid direction={panelDirection} container spacing={0}>
          <Paper className={classNames(scss.paper, classes['primary-paper'])}>
            <CardContent className={scss['landing-page-content']}>
              <img src={logoImage} className={scss['landing-page-logo']} alt='logo' />
              <Typography variant='h5' gutterBottom>Hey There!</Typography>
              <Typography variant='body1'>My name is Dalton, I'm the developer behind SleeplessDev.io! I worked hard to create an aesthetically pleasing and functionally smooth experience. You'll find
                other examples of my work, my resume, how to get in touch, and my blog. Some aspects of this site are still under development.</Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(LandingPage);
