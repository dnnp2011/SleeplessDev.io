import { Grid, Paper, withWidth, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FaNode, FaSass, FaHtml5, FaCss3, FaCss3Alt, FaPython, FaGit } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoMdGitBranch } from 'react-icons/io';
import classNames from 'classnames';
import scss from './projects.module.scss';
import themeStyles from './projects.style';
import whiteLogo from '../../assets/images/logo-terminal/white_logo_transparent_no_text_minified.png';
import devStock1 from '../../assets/images/stock/web-dev-stock-800x533.jpg';
import devStock2 from '../../assets/images/stock/web-dev-stock-3-800x533.jpg';
import devStock3 from '../../assets/images/stock/web-dev-stock-4-800x533.jpg';
import 'devicon';

const Projects = props => {
  const { classes, width } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <div className={scss.root}>
      <Paper elevation={5} className={scss.panel}>
        <Grid wrap={'nowrap'} container direction={'column'}>
          {/* Header */}
          <Grid item className={scss.header}>
            <Grid
              container
              direction={'column'}
              spacing={40}
              alignItems={'center'}
              alignContent={'center'}
              justify={'center'}>
              <Grid container direction={'row'} alignContent={'flex-start'} justify={'flex-start'}>
                <img
                  color={'inherit'}
                  align='start'
                  aria-label={'SleeplessDev Logo'}
                  alt={'SleeplessDev Logo'}
                  src={whiteLogo}
                  className={scss.header__logo}
                />
              </Grid>
              <Grid
                container
                direction={'column'}
                alignContent={'center'}
                justify={'center'}
                spacing={8}
                alignItems={'center'}>
                <Grid item>
                  <Grid container direction={'column'} spacing={16} className={scss['header__text-container']}>
                    <h1 className={scss['heading-primary']}>
                      <span className={scss['heading-primary__title']}>SleeplessDev</span>
                      <span className={scss['heading-primary__subtitle']}>Wake up to the possibilities</span>
                    </h1>
                    <a
                      className={classNames(scss.btn, scss['heading-primary__btn'], scss['btn--grow-in'])}
                      href={'#'}
                      color={'inherit'}
                      aria-label={'scroll to projects'}>
                      Projects
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* About Brief */}
          <Grid item className={scss.content}>
            <main>
              <section className={scss['section-about']}>
                <Grid
                  container
                  direction={'column'}
                  justify={'center'}
                  alignContent={'center'}
                  spacing={16}
                  alignItems={'center'}>
                  <Grid item>
                    <Typography
                      font={'inherit'}
                      color={'inherit'}
                      variant={'h2'}
                      component={'h2'}
                      className={scss['heading-secondary']}
                      gutterBottom>
                      A bit about me
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction={width === 'xs' ? 'column' : 'row'}
                      spacing={width === 'xs' ? 32 : 0}
                      justify={'space-between'}>
                      <Grid item sm>
                        <div className={scss['paragraph__container']}>
                          <Grid container direction={'column'} spacing={16}>
                            <Grid item>
                              <Typography
                                font={'inherit'}
                                color={'inherit'}
                                variant={'subtitle1'}
                                component={'h3'}
                                className={scss['heading-tertiary']}>
                                Developer Journey
                              </Typography>
                              <Typography
                                font={'inherit'}
                                color={'inherit'}
                                component={'p'}
                                className={scss.paragraph}
                                gutterBottom
                                variant={'body1'}>
                                I'm a self-taught full stack developer with a diverse range of skills revolving around
                                computer software and hardware.I'm passionate about learning at every opportunity, as
                                such, I've gained experience using many programming and scripting languages, frameworks,
                                tools, and platforms.
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                font={'inherit'}
                                color={'inherit'}
                                variant={'subtitle1'}
                                component={'h3'}
                                className={scss['heading-tertiary']}>
                                Work I've Done
                              </Typography>
                              <Typography
                                font={'inherit'}
                                color={'inherit'}
                                component={'p'}
                                className={scss.paragraph}
                                gutterBottom
                                variant={'body1'}>
                                I enjoy attending Meetups and conferences to learn about the latest technologies,
                                network with fellow developers, and to extend my knowledge base both within and beyond
                                tech.My desire and aptitude for learning new things quickly, as well as my
                                fastidiousness and keen eye for details have been essential throughout the years of
                                learning Computer Programming.Whatever I do, I do well and to the best of my ability.I'm
                                confident that I will quickly become an asset to my new team, and look forward to
                                learning new techniques, architectures, algorithms, and conventions.
                              </Typography>
                            </Grid>
                            <Grid item>
                              <a href={'#'} className={scss['btn-text']}>
                                Go to resume &rarr;
                              </a>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid item sm>
                        <Grid
                          container
                          direction={width === 'xs' ? 'row' : 'column'}
                          alignContent={'center'}
                          justify={'center'}
                          style={{ marginBottom: width === 'xs' ? '10rem' : '2rem' }}
                          className={scss['composition']}>
                          <img
                            className={classNames(scss['composition__photo'], scss['composition__photo--p1'])}
                            color={'inherit'}
                            aria-label={'composition 1'}
                            alt={'composition 1'}
                            src={devStock1}
                          />
                          <img
                            className={classNames(scss['composition__photo'], scss['composition__photo--p2'])}
                            color={'inherit'}
                            aria-label={'composition 3'}
                            alt={'composition 3'}
                            src={devStock3}
                          />
                          <img
                            className={classNames(scss['composition__photo'], scss['composition__photo--p3'])}
                            color={'inherit'}
                            aria-label={'composition 2'}
                            alt={'composition 2'}
                            src={devStock2}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </section>

              <section className={scss['section-skills']}>
                <Grid container direction={'column'} spacing={0} alignContent={'center'} justify={'center'}>
                  <Grid item>
                    <Grid container direction={'row'} spacing={32} alignContent={'center'} justify={'space-evenly'}>
                      <Grid item xs>
                        <div className={scss['feature-box']}>
                          <Typography
                            className={classNames(scss['heading-tertiary'], scss.center)}
                            variant={'h3'}
                            component={'h3'}
                            font={'inherit'}
                            color={'inherit'}
                            gutterBottom>
                            Languages
                          </Typography>
                          <div className={'feature-box__icon-box'}>

                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </section>
            </main>
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
      <Grid
        container
        direction={'row'}
        spacing={16}
        alignContent={'flex-start'}
        justify={'center'}
        className={scss.appBar}>
        <Grid item />
      </Grid>
    </nav>
  );
}

Projects.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
};
NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
};

compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(NavBar);

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
