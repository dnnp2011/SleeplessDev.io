import { Grid, Paper, Typography, withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { isWidthDown } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import whiteLogo from '../../assets/images/logo-terminal/white_logo_transparent_no_text_minified.png';
import devStock2 from '../../assets/images/stock/web-dev-stock-3-800x533.jpg';
import devStock3 from '../../assets/images/stock/web-dev-stock-4-800x533.jpg';
import devStock1 from '../../assets/images/stock/web-dev-stock-800x533.jpg';
import * as devicons from '../widgets/svg-icon/Devicons';
import SvgIcon from '../widgets/svg-icon/SvgIcon';
import ParticleSystemCanvas from './components/particle-system-canvas/particle-system-widget.component';
import scss from './projects.module.scss';
import themeStyles from './projects.style';


const Projects = props => {

  const { classes, width } = props;

  const iconCategories = {
    languages: [
      devicons.Javascript.plain,
      devicons.Java.plain,
      devicons.Ruby.plain,
      devicons.CSharp.plain,
      devicons.Html5.plain,
      devicons.Python.plain,
      devicons.Css3.plain,
      devicons.Php.plain,
      devicons.Typescript.plain,
      devicons.MySql.plain
    ],
    frontend: [
      devicons.Bootstrap.plain,
      devicons.Jquery.plain,
      devicons.Sass.plain,
      devicons.React.plain
    ],
    backend: [
      devicons.Apache.plain,
      devicons.Debian.plain,
      devicons.Linux.plain,
      devicons.Django.plain,
      devicons.Docker.plain,
      devicons.NodeJs.plain,
      devicons.Express.plain,
      devicons.MongoDb.plain,
      devicons.Nginx.plain,
      devicons.Redhat.plain,
      devicons.Ubuntu.plain
    ],
    mobile: [devicons.Android.plain],
    tools: [
      devicons.AmazonWebServices.plain,
      devicons.ChromeDevTools.plain,
      devicons.Git.plain,
      devicons.Ssh.plain
    ],
    other: [
      devicons.Atom.plain,
      devicons.Bitbucket.plain,
      devicons.Github.plain,
      devicons.Trello.plain,
      devicons.Gimp.plain,
      devicons.IntelliJ.plain,
      devicons.Webstorm.plain,
      devicons.PhpStorm.plain,
      devicons.PyCharm.plain,
      devicons.Vim.plain,
      devicons.VisualStudio.plain,
      devicons.Windows.plain
    ]
  };
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
              <ParticleSystemCanvas />
              <Grid container direction={'row'} alignContent={'flex-start'} justify={'flex-start'}>
                <img
                  color={'inherit'}
                  align='start'
                  aria-label={'SleeplessDev Logo'}
                  alt={'SleeplessDev Logo'}
                  src={whiteLogo}
                  className={scss['header__logo']}
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
                      <span className={scss['heading-primary__title']}>Dalton Pierce</span>
                      <span className={scss['heading-primary__subtitle']}>Full Stack Developer</span>
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
                    <div className={scss['heading-secondary']}>
                      <Typography
                        font={'inherit'}
                        color={'inherit'}
                        variant={'h2'}
                        component={'h2'}
                        className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--gradient'])}
                        gutterBottom>
                        A bit about me
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction={panelDirection}
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
                                I\'m a self-taught full stack developer with a diverse range of skills revolving around
                                computer software and hardware. I'm passionate about learning at every opportunity, as
                                such, I\'ve gained experience using many programming and scripting languages,
                                frameworks,
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
                          direction={panelDirection}
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
                <Grid container direction={'column'} spacing={16} alignItems={'center'} alignContent={'flex-start'} justify={'center'} style={{ marginBottom: '10rem' }}>
                  <Grid item>
                    <div className={scss['heading-secondary']} style={{ marginTop: '2rem' }}>
                      <Typography
                        font={'inherit'}
                        color={'inherit'}
                        variant={'h2'}
                        component={'h2'}
                        className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--white'])}
                        gutterBottom>
                        Skills
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <Grid container direction={isWidthDown('sm', width, true) ? 'column' : 'row'} spacing={32} alignContent={'center'} alignItems={'stretch'} justify={'space-evenly'}>,
                      {
                        Object.keys(iconCategories)
                          .map(category =>
                            <Grid item key={category} xs>
                              <SkillBox scss={scss} icons={iconCategories[category]} category={category} />
                            </Grid>
                          )
                      }
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

function SkillBox(props) {
  const { scss, icons, category } = props;

  return (
    <div className={classNames(scss['feature-box'], scss['unskew'])}>
      <Typography
        className={classNames(scss['heading-tertiary'], scss['heading-tertiary--feature'], scss.center)}
        variant={'h3'}
        component={'h3'}
        font={'inherit'}
        color={'inherit'}
        gutterBottom>
        {category}
      </Typography>
      <ul className={scss['icon-list']}>
        {
          icons.map(icon => (<li key={icon.name}>
            <div className={scss['hover-icon']}>
              <SvgIcon aria-labelledby={scss['hover-icon__label']} title={icon.name} svgClass={scss['hover-icon']} size={'6rem'} gradientDirection={'horizontal'} backgroundStroke={icon.background} />
              <Typography variant={'body1'} component={'p'} className={scss['hover-icon__label']} font={'inherit'} color={'inherit'} align={'center'}>{icon.name}</Typography>
            </div>
          </li>))
        }
      </ul>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};
SkillBox.propTypes = {
  scss: PropTypes.shape({}).isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  })).isRequired,
  category: PropTypes.string.isRequired
};

compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(SkillBox);

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
