import { Grid, Paper, withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import whiteLogo from '../../assets/images/logo-terminal/white_logo_transparent_no_text.png';
import scss from './projects.module.scss';
import themeStyles from './projects.style';


const Projects = props => {

  const { classes, width } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <div className={scss.root}>
      <Paper elevation={5} className={scss.mainPanel}>
        <Grid container direction={'column'}>
          {/* Header */}
          <Grid item className={scss.header}>
            <Grid container direction={'column'} spacing={40} alignItems={'center'} alignContent={'center'} justify={'center'}>
              <Grid container direction={'row'} alignContent={'flex-start'} justify={'flex-start'}>
                <img color={'inherit'} align='start' aria-label={'SleeplessDev Logo'} alt={'SleeplessDev Logo'} src={whiteLogo} height={100} className={scss.logo} />
              </Grid>
              <Grid container direction={'column'} alignContent={'center'} justify={'center'} spacing={8} alignItems={'center'}>
                {/*    <Typography color={'inherit'} variant={'h1'} component={'h1'} gutterBottom noWrap align={'center'} autoCapitalize={'true'}>
                 <span className={scss.headerTitle}>SleeplessDev</span><br />
                 <span className={scss.headerSubtitle}>Making sure your website, is woke af</span>
                 </Typography>*/}
                <Grid container direction={'row'} className={scss.titleContainer} alignContent={'center'} justify={'center'}>
                  <h1>
                    <span className={scss.headerTitle}>SleeplessDev</span>
                    <span className={scss.headerSubtitle}>Wake up to the possibilities</span>
                  </h1>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

};


function NavBar(props) {

  const { width, classes } = props;
  const panelDirection = width === 'xs' ? 'column' : 'row';


  return (
    <nav>
      <Grid container direction={'row'} spacing={16} alignContent={'flex-start'} justify={'center'} className={scss.appBar}>
        <Grid item>

        </Grid>
      </Grid>
    </nav>
  );

}

Projects.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};
NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(NavBar);

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
