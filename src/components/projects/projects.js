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
    <Grid className={classNames(scss.root, classes.root)}>
      <Paper elevation={5} className={scss.panel}>
        <Grid wrap={'nowrap'} container direction={'column'}>
          {/* Header */}
          <Grid item className={scss.header} id={'header'}>
            <Grid
              container
              direction={'column'}
              spacing={40}
              style={{ width: '100%' }}
              alignItems={'center'}
              alignContent={'center'}
              justify={'center'}>
              {/* TODO: Particle system is not very responsive, resizing the viewport can greatly effect centering */}
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
                style={{ width: '100%' }}
                alignItems={'center'}>
                <Grid item>
                  <Grid container direction={'column'} spacing={16} className={scss['header__text-container']} style={{ width: '100%' }}>
                    <h1 className={scss['heading-primary']}>
                      <span className={scss['heading-primary__title']}>Dalton Pierce</span>
                      <span className={scss['heading-primary__subtitle']}>Full Stack Developer</span>
                    </h1>
                    <a
                      className={classNames(scss.btn, scss['heading-primary__btn'], scss['btn--grow-in'])}
                      color={'inherit'}
                      href={'#'}
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        document.querySelector('#section-projects')
                          .scrollIntoView({ behavior: 'smooth' });
                      }}
                      aria-label={'scroll to projects'}>
                      Projects
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Content */}
          <Grid item className={scss.content}>
            <main>
              <section id={'section-about'} className={scss['section-about']}>
                <Grid
                  container
                  direction={'column'}
                  justify={'center'}
                  alignContent={'center'}
                  spacing={16}
                  alignItems={'center'}>
                  <Grid item>
                    <Grid className={scss['heading-secondary']}>
                      <Typography
                        font={'inherit'}
                        color={'inherit'}
                        variant={'h2'}
                        component={'h2'}
                        className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--gradient'])}
                        gutterBottom>
                        A bit about me
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction={panelDirection}
                      spacing={width === 'xs' ? 32 : 0}
                      style={{ width: '100%' }}
                      justify={'space-between'}>
                      <Grid item sm>
                        <Grid className={scss['paragraph__container']}>
                          <Grid container direction={'column'} spacing={16} style={{ width: '100%' }}>
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
                                I'm a self-taught full stack developer with a Griderse range of skills revolving around
                                computer software and hardware. I'm passionate about learning at every opportunity, as
                                such, I've gained experience using many programming and scripting languages,
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
                        </Grid>
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

              {/*              <section id={'section-skills'} className={scss['section-skills']}>
               <Grid container direction={'column'} spacing={16} alignItems={'center'} alignContent={'flex-start'} justify={'center'} style={{
               marginBottom: '4rem',
               width: '100%'
               }}>
               <Grid item>
               <Grid className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
               <Typography
               font={'inherit'}
               color={'inherit'}
               variant={'h2'}
               component={'h2'}
               className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--white'])}
               gutterBottom>
               Skills
               </Typography>
               </Grid>
               </Grid>
               <Grid item>
               <Grid container direction={isWidthDown('sm', width, true)
               ? 'column'
               : 'row'} spacing={32} alignItems={'stretch'} alignContent={'center'} justify={'space-evenly'} style={{
               width: '100%'
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

              <section tabIndex={0} id={'section-skills'} className={scss['section-skills']}>
                <Grid container direction={'column'} spacing={16} alignContent={'center'} justify={'space-around'} alignItems={'stretch'}>
                  <Grid item className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
                    <Typography
                      font={'inherit'}
                      color={'inherit'}
                      variant={'h2'}
                      component={'h2'}
                      className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--white'])}
                      gutterBottom>
                      Skills
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container direction={ (isWidthDown('sm', width, true) ? 'column' : 'row')} alignContent={'center'} alignItems={'stretch'} justify={'space-evenly'}
                      className={ scss[ 'skillbox-wrapper' ] }>
                      {
                        Object.keys(iconCategories)
                          .map((category, index) =>
                            <Grid item xs key={ category }>
                              <SkillBox scss={ scss } icons={ iconCategories[ category ] } category={ category } />
                            </Grid>
                          )
                      }
                    </Grid>
                  </Grid>
                </Grid>
              </section>

              <section id={'section-projects'} className={scss['section-projects']}>
                <Grid container direction={'column'} spacing={16} alignItems={'center'} alignContent={'center'}>
                  <Grid item>
                    <Grid className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
                      <Typography
                        font={'inherit'}
                        color={'inherit'}
                        variant={'h2'}
                        component={'h2'}
                        className={classNames(scss['heading-secondary__label'], scss['heading-secondary__label--gradient'])}
                        gutterBottom>
                        Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction={panelDirection} spacing={40} alignContent={'center'} alignItems={'center'} justify={'space-around'}>
                      <ProjectCard title={'Breakout'} description={'A C# remake of the classic arcade game: "Breakout"'} skills={[
                        'C#',
                        'XNA',
                        'Game Loops',
                        'Sprite Sheet Animation'
                      ]} color={'orange'} backgroundClass={classes.breakoutBg} classes={classes} />
                      <ProjectCard title={'Poshcalc'}
                        skills={[
                          'Java',
                          'Native Android',
                          'MVC Architecture'
                        ]} color={'green'} backgroundClass={classes.poshcalcBg} classes={classes}>
                        A native Android application to help online reseller price their goods with the optimal <abbr title='Return On Investment'>ROI</abbr>
                      </ProjectCard>
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

              <section className={scss['section-stories']}>
                <Grid container direction={'column'} spacing={16} alignContent={'center'} alignItems={'center'} justify={'center'}>
                  <Grid item xs>
                    <Story name={'Victoria Saucier'} position={'CEO Gainfy Enterprises'} highlight={'Passionate and Value Driven'}
                      testimonial={'(Dalton) brings passionate, value-driven technical skills and analytical abilities to successfully evolve company product strategy.'} {...props} />
                  </Grid>
                </Grid>
              </section>
            </main>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

function SkillBox(props) {
  const { scss, icons, category } = props;

  return (
    <Grid className={classNames(scss['feature-box'], scss['unskew'])}>
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
            <Grid className={scss['hover-icon']}>
              <SvgIcon aria-labelledby={scss['hover-icon__label']} title={icon.name} svgClass={scss['hover-icon']} size={'3rem'} gradientDirection={'horizontal'} backgroundStroke={icon.background} />
              <Typography variant={'body1'} component={'p'} className={scss['hover-icon__label']} font={'inherit'} color={'inherit'} align={'center'}>{icon.name}</Typography>
            </Grid>
          </li>))
        }
      </ul>
    </Grid>
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
      <Grid className={scss['card']}>
        <Grid className={classNames(scss['card__side'], scss['card__side--back'], scss[`card__side--back-${color}`])}>
          <Grid container direction={'column'} spacing={16} justify={'center'} alignItems={'center'} alignContent={'center'}>
            <Grid item>
              <p className={scss['card__cta']}>Take a look!</p>
            </Grid>
            <Grid item>
              <Grid container direction={'column'} spacing={32} justify={'space-around'} alignItems={'center'} alignContent={'center'} className={scss['card__cta-buttons']}>
                <Grid item>
                  <a href={'#'} color={'inherit'} className={classNames(scss.btn, scss['card__cta-btn'])}>Demo</a>
                </Grid>
                <Grid item>
                  <a href={'#'} color={'inherit'} className={classNames(scss.btn, scss['card__cta-btn'])}>Code</a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classNames(scss['card__side'], scss['card__side--front'])}>
          <Grid className={classNames(scss['card__background'], backgroundClass)}>
            <h4 className={scss['card__heading']}>
              <span className={classNames(scss['card__heading-span'], scss[`card__heading-span--${color}`])}>
                {title}
              </span>
            </h4>
          </Grid>
          <Grid className={scss['card__details']}>
            <Grid container direction={'column'} spacing={16} justify={'space-around'} alignItems={'center'} alignContent={'center'}>
              <Grid item>
                <p className={scss['card__details--description']}>
                  {description || props.children}
                </p>
              </Grid>
              <Grid item style={{ width: '100%' }}>
                <ul className={classNames(scss['card__details--skills'])}>
                  {renderSkills(skills)}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Story(props) {
  const { name, testimonial, highlight, position, classes, panelDirection, width } = props;
  const firstName = (name.split(' ')[0]).toString()
    .toLowerCase();

  const isXs = width === 'xs';

  return (
    <Grid item xs>
      <Grid container direction={panelDirection} className={scss.story} alignItems={'center'} justify={'center'} alignContent={'center'}>
        <Grid item>
          <figure className={classNames(classes[`${firstName}Bg`], scss['story__portrait'], width === 'xs' ? classes.mxAuto : classes.floatLeft)}>
            <h5 className={scss['story__portrait-label']}>
              <span className={scss['story__portrait-label--name']}>{name}</span><br />
              <span className={scss['story__portrait-label--position']}>{position}</span>
            </h5>
          </figure>
        </Grid>
        <Grid item xs>
          <Grid container direction={'column'} spacing={8} alignContent={isXs ? 'center' : 'flex-start'} justify={isXs ? 'center' : 'flex-start'} alignItems={'stretch'} className={scss['story__text']}>
            <Grid item>
              <h3 className={classNames(scss['heading-tertiary'], isXs ? classes.textCenter : classes.textLeft)}>
                <strong>{highlight}</strong>
              </h3>
            </Grid>
            <Grid item xs={12}>
              <p className={scss['block-quote']}>
                {testimonial}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  })).isRequired,
  category: PropTypes.string.isRequired
};
ProjectCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.oneOf(['orange', 'blue', 'green']).isRequired,
  backgroundClass: PropTypes.string.isRequired
};

compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(SkillBox);

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
