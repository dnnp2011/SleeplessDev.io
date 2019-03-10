import { Grid, Paper, Typography, withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
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
    mobile: [ devicons.Android.plain ],
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
    <div className={classNames(scss.root, classes.root)}>
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
              <ParticleSystemCanvas diameterRange={{
                min: 700,
                max: 1000
              }} xAxisOffset={350} yAxisOffset={-200} xSpawnOffset={-450} ySpawnOffset={-200}
                                    particleCount={800} sizeRange={{
                min: 5,
                max: 15
              }} angularVelocity={0.001} />
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
                          style={{ marginBottom: width === 'xs' ? '6rem' : '1.2rem' }}
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

              {/*              <section className={scss['section-skills']}>
               <Grid container direction={'column'} spacing={16} alignItems={'center'} alignContent={'flex-start'} justify={'center'} style={{
               marginBottom: '4rem'
               }}>
               <Grid item>
               <div className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
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
               <Grid container direction={isWidthDown('sm', width, true)
               ? 'column'
               : 'row'} spacing={32} alignItems={'stretch'} alignContent={'center'} justify={'space-evenly'} style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               margin: 'auto'
               }}>
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
               </section>*/}

              <section className={scss['section-skills']}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'stretch',
                  alignContent: 'center',
                  margin: '0 0 4rem 0',
                  padding: '2rem'
                }}>
                  <div className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
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
                  <div style={{
                    display: 'flex',
                    flexDirection: (isWidthDown('sm', width, true) ? 'column' : 'row'),
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    alignItems: 'stretch',
                    margin: 0,
                    padding: 0,
                    width: '100%'
                  }}
                       className={scss['skillbox-wrapper']}>
                    {
                      Object.keys(iconCategories)
                            .map((category, index) =>
                              <div style={{ marginTop: (isWidthDown('sm', width, true) && index !== 0 ? '2rem' : 0),
                                marginLeft: (!isWidthDown('sm', width, true) && index !== 0 ? '2rem' : 0),
                              }} key={category}>
                                <SkillBox scss={scss} icons={iconCategories[category]} category={category} />
                              </div>
                            )
                    }
                  </div>
                </div>
              </section>

              <section className={scss['section-projects']}>
                <Grid container direction={'column'} spacing={16} alignItems={'center'} alignContent={'center'}>
                  <Grid item>
                    <div className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
                      <Typography
                        font={'inherit'}
                        color={'inherit'}
                        variant={'h2'}
                        component={'h2'}
                        className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--gradient'])}
                        gutterBottom>
                        Projects
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <Grid container direction={panelDirection} spacing={40} alignContent={'center'} alignItems={'center'} justify={'space-around'}>
                      <ProjectCard title={'Breakout'} description={'A C# remake of the classic arcade game: "Breakout"'} skills={[
                        'C#',
                        'XNA',
                        'Game Loops',
                        'Sprite Sheet Animation'
                      ]} color={'orange'} backgroundClass={classes.breakoutBg} classes={classes} />
                      <ProjectCard title={'Poshcalc'} description={'A native Android application to help online reseller price their goods with the optimal return on investment'} skills={[
                        'Java',
                        'Native Android',
                        'MVC Architecture'
                      ]} color={'green'} backgroundClass={classes.poshcalcBg} classes={classes} />
                      <ProjectCard title={'Zombies With Friends'} description={'A wave-based zombie shooter you can play with friends!'} skills={[
                        'C#',
                        '3D Modeling',
                        'Unity3D',
                        'Network Synchronization',
                        'Animation',
                        'Singleton Pattern'
                      ]} color={'blue'} backgroundClass={classes.zombiesBg} classes={classes} />
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
          icons.map((icon, index) => (<li key={icon.name}>
            <div className={scss['hover-icon']}>
              <SvgIcon aria-labelledby={scss['hover-icon__label']} title={icon.name} svgClass={scss['hover-icon']} size={'3rem'} gradientDirection={'horizontal'} backgroundStroke={icon.background} />
              <Typography variant={'body1'} component={'p'} className={scss['hover-icon__label']} font={'inherit'} color={'inherit'} align={'center'}>{icon.name}</Typography>
            </div>
          </li>))
        }
      </ul>
    </div>
  );
}

function ProjectCard(props) {
  const { title, description, skills, color, backgroundClass, classes } = props;

  const renderSkills = skills => {
    const slice = skills.length > 5 ? skills.slice(0, 5) : skills;
    return slice.map((skill, index) => (<li className={index !== slice.length - 1 ? classes[`skills--${color}`] : null} key={skill}>{skill}</li>));
  };

  return (
    <Grid item>
      <div className={scss['card']}>
        <div className={classNames(scss['card__side'], scss['card__side--back'], scss[`card__side--back-${color}`])}>
          <h5>Back</h5>
        </div>
        <div className={classNames(scss['card__side'], scss['card__side--front'])}>
          <div className={classNames(scss['card__background'], backgroundClass)}>
            <h4 className={scss['card__heading']}>
              <span className={classNames(scss['card__heading-span'], scss[`card__heading-span--${color}`])}>
                {title}
              </span>
            </h4>
          </div>
          <div className={scss['card__details']}>
            <Grid container direction={'column'} spacing={16} justify={'space-around'} alignItems={'center'} alignContent={'center'}>
              <Grid item style={{ width: '100%' }}>
                <p className={scss['card__details--description']}>
                  {description}
                </p>
              </Grid>
              <Grid item style={{ width: '100%' }}>
                <ul className={classNames(scss['card__details--skills'])}>
                  {renderSkills(skills)}
                </ul>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Grid>
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
    background: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]).isRequired,
    text: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ])
  })).isRequired,
  category: PropTypes.string.isRequired
};
ProjectCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.oneOf([ 'orange', 'blue', 'green' ]).isRequired,
  backgroundClass: PropTypes.string.isRequired
};

compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(SkillBox);

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
