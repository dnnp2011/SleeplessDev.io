import {
  Grid,
  Paper,
  Typography,
  withWidth,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  InputAdornment,
  FilledInput, Grow
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
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
import victoriaSaucier from '../../assets/images/portrait/Victoria_Saucier_300x300_med.jpg';
import michaelSzczech from '../../assets/images/portrait/Michael_Szczech_300x300_med.jpg';
import storyBgStillframe from '../../assets/images/stock/snow-motion-1080x608.jpg';
import storyBgVideo from '../../assets/video/falling_sparks_water.mp4';
import storyBgVideoAlt from '../../assets/video/mt_baker.webm';
import storyBgVideoAlt2 from '../../assets/video/snow_motion.ogv';
import logoWithText from '../../assets/images/logo-terminal/logo_with_text.svg';


const hrefHome = '/',
  hrefContact = '/contact',
  hrefAbout = '/about-me',
  hrefBlog = '/blog',
  hrefResume = 'https://resume.creddle.io/resume/7wqefr81r5z',
  hrefLinkedin = 'https://www.linkedin.com/in/dalton-glenn-pierce/',
  hrefGithub = 'https://github.com/dnnp2011/';


class Projects extends React.Component {
  state = {
    bgVideo: null,
    navVisible: false
  };


  componentDidMount() {
    if (!this.state.bgVideo) {
      this.setState({
        bgVideo: <BgVideo
          videoSrc={storyBgVideo}
          videoSrcAlt={[ storyBgVideoAlt, storyBgVideoAlt2 ]}
          videoClass={scss['bg-video__content']}
        />
      });
    }
  }


  toggleNav = () => {
    this.setState((state, props) => ({
      navVisible: !state.navVisible
    }));
  };


  render() {
    const { classes, width } = this.props;
    const { bgVideo, navVisible } = this.state;

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
        devicons.Bootstrap.plain, devicons.Jquery.plain, devicons.Sass.plain, devicons.React.plain
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
        devicons.AmazonWebServices.plain, devicons.ChromeDevTools.plain, devicons.Git.plain, devicons.Ssh.plain
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
      <div id={'project-root'} className={scss.projectRoot}>
        <div className={scss.navigation}>
          <input checked={navVisible} onChange={e => this.setState({ navVisible: e.target.value })} type={'checkbox'} className={scss['navigation__checkbox']} id={'nav-toggle'} />
          <label htmlFor={'#nav-toggle'} onClick={this.toggleNav} className={scss['navigation__button']}>
            <div className={scss['navigation__icon']}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
          <div className={scss['navigation__bg']}>&nbsp;</div>
          <nav className={scss['navigation__nav']}>
            <ul className={scss['navigation__list']}>
              <li className={scss['navigation__item']}>
                <a href={hrefHome} className={scss['navigation__link']}>Home</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={hrefContact} className={scss['navigation__link']}>Contact Me</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={hrefBlog} className={scss['navigation__link']}>Blog</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={hrefResume} rel={'noreferrer noopener nofollow'} target={'_blank'} className={scss['navigation__link']}>Resume</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={hrefLinkedin} rel={'noreferrer noopener nofollow'} target={'_blank'} className={scss['navigation__link']}>LinkedIn</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={hrefGithub} rel={'noreferrer noopener nofollow'} target={'_blank'} className={scss['navigation__link']}>Github</a>
              </li>
            </ul>
          </nav>
        </div>

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
                <ParticleSystemCanvas
                  diameterRange={{
                    min: 700,
                    max: 1000
                  }}
                  xAxisOffset={350}
                  yAxisOffset={-200}
                  xSpawnOffset={-450}
                  ySpawnOffset={-200}
                  particleCount={800}
                  sizeRange={{
                    min: 5,
                    max: 15
                  }}
                  angularVelocity={0.001}
                />
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
                    <Grid
                      container
                      direction={'column'}
                      spacing={16}
                      className={scss['header__text-container']}
                      style={{ width: '100%' }}>
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
                          className={classNames(
                            scss['heading-secondary__label'],
                            scss['heading-secondary__label--gradient']
                          )}
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
                                  I'm a self-taught full stack developer with a Griderse range of skills revolving
                                  around computer software and hardware. I'm passionate about learning at every
                                  opportunity, as such, I've gained experience using many programming and scripting
                                  languages, frameworks, tools, and platforms.
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
                                  learning Computer Programming.Whatever I do, I do well and to the best of my
                                  ability.I'm confident that I will quickly become an asset to my new team, and look
                                  forward to learning new techniques, architectures, algorithms, and conventions.
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

                <section tabIndex={0} id={'section-skills'} className={scss['section-skills']}>
                  <Grid
                    container
                    direction={'column'}
                    spacing={16}
                    alignContent={'center'}
                    justify={'space-around'}
                    alignItems={'stretch'}>
                    <Grid item className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
                      <Typography
                        font={'inherit'}
                        color={'inherit'}
                        variant={'h2'}
                        component={'h2'}
                        className={classNames(
                          scss['heading-secondary__label'],
                          scss['heading-secondary__label--white']
                        )}
                        gutterBottom>
                        Skills
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction={isWidthDown('sm', width, true) ? 'column' : 'row'}
                        className={scss['skillbox-wrapper']}>
                        {Object.keys(iconCategories)
                               .map((category, index) => (
                                 <Grid item xs key={category}>
                                   <SkillBox scss={scss} icons={iconCategories[category]} category={category} />
                                 </Grid>
                               ))}
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
                          className={classNames(
                            scss['heading-secondary__label'],
                            scss['heading-secondary__label--gradient']
                          )}
                          gutterBottom>
                          Projects
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        spacing={40}
                        alignContent={'center'}
                        alignItems={'center'}
                        justify={'space-evenly'}
                      >
                        <Grid item>
                          <ProjectCard
                            title={'Breakout'}
                            description={'A C# remake of the classic arcade game: "Breakout"'}
                            skills={[
                              'C#', 'XNA', 'Game Loops', 'Sprite Sheet Animation'
                            ]}
                            color={'orange'}
                            backgroundClass={classes.breakoutBg}
                            classes={classes}
                            {...this.props}
                          />
                        </Grid>
                        <Grid item>
                          <ProjectCard
                            title={'Poshcalc'}
                            skills={[ 'Java', 'Native Android', 'MVC Architecture' ]}
                            color={'green'}
                            backgroundClass={classes.poshcalcBg}
                            classes={classes}
                            {...this.props}
                          >
                            A native Android application to help online reseller price their goods with the optimal{' '}
                            <abbr title='Return On Investment'>ROI</abbr>
                          </ProjectCard>
                        </Grid>
                        <Grid item>
                          <ProjectCard
                            title={'Zombies With Friends'}
                            description={'A wave-based zombie shooter you can play with friends!'}
                            skills={[
                              'C#',
                              '3D Modeling',
                              'Unity3D',
                              'Network Synchronization',
                              'Animation',
                              'Singleton Pattern'
                            ]}
                            color={'blue'}
                            backgroundClass={classes.zombiesBg}
                            classes={classes}
                            {...this.props}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </section>

                <section className={scss['section-stories']}>
                  <div className={scss['bg-video']} style={{ height: isWidthDown('md', width, true) ? '100%' : '' }}>
                    {!!bgVideo && isWidthUp('md', width, true) ? (
                      bgVideo
                    ) : (
                       <div className={scss['bg-video__placeholder']} />
                     )}
                  </div>
                  <Grid
                    container
                    direction={'column'}
                    spacing={40}
                    alignContent={'center'}
                    alignItems={'center'}
                    justify={'center'}
                  >
                    <Grid item>
                      <div className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
                        <Typography
                          font={'inherit'}
                          color={'inherit'}
                          variant={'h2'}
                          component={'h2'}
                          className={classNames(
                            scss['heading-secondary__label'],
                            scss['heading-secondary__label--gradient']
                          )}
                          gutterBottom>
                          In other words
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item>
                      <Story
                        name={'Victoria Saucier'}
                        position={'CEO - Gainfy'}
                        highlight={'Passionate and Value Driven'}
                        testimonial={
                          '(Dalton) brings passionate, value-driven technical skills and analytical abilities to successfully evolve company product strategy.'
                        }
                        panelDirection={panelDirection}
                        portraitSrc={victoriaSaucier}
                        {...this.props}
                      />
                    </Grid>
                    <Grid item>
                      <Story
                        name={'Michael Szczech'}
                        position={'Software Engineer - Gainfy'}
                        highlight={'A hell of a programmer'}
                        testimonial={
                          '(Dalton) has a unique talent for analyzing a problem, and formulating a solution that suits the project\'s constraints. He\'s a hell of a programmer!'
                        }
                        panelDirection={panelDirection}
                        portraitSrc={michaelSzczech}
                        {...this.props}
                      />
                    </Grid>
                    <Grid item>
                      <a href={hrefAbout} className={scss['btn-text']}>
                        Go to resume &rarr;
                      </a>
                    </Grid>
                  </Grid>
                </section>

                {/* <section className={scss['section-contact']}>
                 <ContactForm {...this.props} />
                 </section> */}
              </main>

              <footer className={scss.footer}>
                <Grid container direction={'row'} alignContent={'center'} alignItems={'center'} justify={'center'}>
                  <Grid item>
                    <div className={scss['footer__logo-box']}>
                      <img
                        color={'inherit'}
                        aria-label={'SleeplessDev Logo'}
                        alt={'SleeplessDev Logo'}
                        src={logoWithText}
                        className={scss['footer__logo']}
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid container direction={'row'} alignContent={'center'} alignItems={'center'}>
                  <Grid item xs={12} md={6}>
                    <Grid container direction={'column'} spacing={8}>
                      <Grid item xs>
                        <Grid
                          container
                          direction={'row'}
                          spacing={16}
                          alignContent={'center'}
                          justify={'center'}
                          className={scss['footer__nav']}
                          style={{
                            border: 'none',
                            padding: '0',
                            margin: '0'
                          }}>
                          <Grid item className={scss['footer__nav-item']}>
                            <a
                              href={hrefLinkedin}
                              target={'_blank'}
                              rel={'noreferrer noopener nofollow'}
                              className={scss['footer__nav-link']}>
                              <FaLinkedinIn color={'#f7f7f7'} size={'1.3rem'} fill={'#f7f7f7'} />
                            </a>
                          </Grid>
                          <Grid item className={scss['footer__nav-item']}>
                            <a
                              href={hrefGithub}
                              target={'_blank'}
                              rel={'noreferrer noopener nofollow'}
                              className={scss['footer__nav-link']}>
                              <FaGithub color={'#f7f7f7'} size={'1.3rem'} fill={'#f7f7f7'} />
                            </a>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <ul style={{
                          width: '60%',
                          marginLeft: 'auto',
                          marginRight: 'auto'
                        }}>
                          <Grid
                            container
                            direction={'row'}
                            spacing={16}
                            alignItems={'center'}
                            alignContent={'center'}
                            justify={'center'}
                            className={scss['footer__nav']}>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={hrefHome} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Home
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={hrefContact} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Contact
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={hrefAbout} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  About
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={hrefBlog} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Blog
                                </a>
                              </li>
                            </Grid>
                          </Grid>
                        </ul>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid
                      container
                      direction={'column'}
                      alignContent={'center'}
                      justify={'center'}
                      alignItems={'center'}>
                      <Grid item>
                        <Grid
                          container
                          direction={'row'}
                          alignContent={'center'}
                          justify={'center'}
                          alignItems={'center'}>
                          <Grid item xs={12} md={10}>
                            <p className={scss['footer__copyright']}>
                              Built by{' '}
                              <a href={hrefContact} target={'_blank'} className={scss['footer__nav-link']}>
                                Dalton Pierce
                              </a>{' '}
                              for use on{' '}
                              <a href={hrefHome} target={'_blank'} className={scss['footer__nav-link']}>
                                SleeplessDev.io
                              </a>.
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </footer>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}


function ProjectPopup(props) {
  const { images, heading, subheading, body, codeUrl, demoUrl, width, toggleVisible, detailsVisible } = props;

  const isSm = isWidthDown('sm', width, true);

  return (
    <Fade in={detailsVisible} timeout={300}>
      <div className={scss.popup}>
        <div className={scss['popup__content']}>
          <div className={scss['popup__left']}>
            {
              (images && width !== 'xs')
              ? images.map((image, index) => (
                <div key={`${heading}-${index}`}>
                  <img
                    alt={`${heading} image ${index + 1}`}
                    src={image}
                    className={scss['popup__img']}
                  />
                </div>
              ))
              : null
            }
          </div>
          <div className={scss['popup__right']}>
            <a id={'close-popup'} onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              toggleVisible(false);
            }} href={'#'} className={scss['popup__close-button']}>&times;</a>
            <div className={classNames(scss['heading-secondary'], scss['popup__heading'])}>
              <Typography
                font={'inherit'}
                color={'inherit'}
                variant={'h2'}
                component={'h2'}
                className={classNames(
                  scss['heading-secondary__label'],
                  scss['heading-secondary__label--gradient']
                )}
              >
                {heading || 'Heading'}
              </Typography>
            </div>
            <h4 className={classNames(scss['heading-tertiary'], scss['popup__subheading'])}>
              {subheading || 'Temporary subheading'}
            </h4>
            <p className={scss['popup__body']}>
              { body || '' }
            </p>
            <Grid container direction={'row'} alignContent={'flex-start'} spacing={32}>
              <Grid item>
                <a className={classNames(scss['btn'], scss['btn--green'])} rel={'noopener noreferrer nofollow'} target={'_blank'} href={demoUrl}>View Demo</a>
              </Grid>
              <Grid item>
                <a className={classNames(scss['btn'], scss['btn--green'])} rel={'noopener noreferrer nofollow'} target={'_blank'} href={codeUrl}>View Code</a>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Fade>
  );
}


/*function ProjectPopup(props) {
 const { images, heading, subheading, body, codeUrl, demoUrl, width } = props;

 const isSm = isWidthDown('sm', width, true);

 return (
 <div style={{ display: 'block' }}>
 <div className={scss.popup}>
 <Grid container direction={'column'} alignContent={'center'} justify={'center'} style={{ height: '100%' }}>
 <Grid item style={{ width: '100%' }}>
 <Grid container alignContent={'center'} justify={'center'} alignItems={'center'} style={{ height: '100%' }}>
 <Grid item xs={12} sm={10} md={8}>
 <div className={scss['popup__content']}>
 <Grid container alignContent={'center'} justify={'center'}>
 <Grid container direction={'row'} alignContent={'flex-end'} justify={'flex-end'}>
 <Grid item className={scss['self-end']}>
 <a onClick={() => {}} href={'#'} className={scss['popup__close-button']}>&times;</a>
 </Grid>
 </Grid>
 <Grid item md={4} style={{ marginBottom: (isSm ? '2rem' : '0') }}>
 <div className={scss['popup__images']}>
 <Grid container spacing={0} direction={isSm ? 'row' : 'column'} alignContent={'center'} alignItems={'center'} justify={'center'}>
 {
 images
 ? images.map((image, index) => (
 <Grid item key={`${heading}-${index}`}>
 <img
 alt={`${heading} image ${index + 1}`}
 src={image}
 className={scss['popup__img']}
 />
 </Grid>
 ))
 : null
 }
 </Grid>
 </div>
 </Grid>
 <Grid item xs={12} md={8}>
 <Grid container direction={'column'}>
 <Grid item>
 <Grid container direction={'column'} zeroMinWidth className={scss['popup__text']} style={{ height: '100%' }}>
 <Grid item className={(isSm ? scss['self-center'] : scss['self-start'])}>
 <div className={classNames(scss['heading-secondary'], scss['popup__heading'])}>
 <Typography
 font={'inherit'}
 color={'inherit'}
 variant={'h2'}
 component={'h2'}
 className={classNames(
 scss['heading-secondary__label'],
 scss['heading-secondary__label--gradient']
 )}
 >
 {heading || 'Heading'}
 </Typography>
 </div>
 </Grid>
 <Grid item className={scss['self-start']}>
 <h4 className={classNames(scss['heading-tertiary'], scss['popup__subheading'])}>
 {subheading || 'Temporary subheading'}
 </h4>
 </Grid>
 <Grid item className={scss['self-start']}>
 <div className={scss['popup__body']}>
 <p>
 {
 body
 ? body
 : `
 Qui irure tempor incididunt fugiat magna anim. Amet incididunt sit occaecat mollit veniam consequat minim ipsum aute mollit aliqua consectetur amet. Eu laborum irure aliqua nisi dolore elit aliquip laborum ullamco sint nostrud anim. Ex proident labore proident ea excepteur proident magna qui commodo. Ea ex consectetur duis et ea. Duis do est aliqua est voluptate consectetur sunt amet irure magna.

 Ea laboris dolor dolore tempor excepteur cupidatat tempor reprehenderit irure deserunt laboris labore. Nulla irure in id officia eu. Exercitation aliquip duis mollit ex non mollit. Quis aute dolor sunt proident.
 `
 }
 </p>
 </div>
 </Grid>
 <Grid item className={(isSm ? scss['self-center'] : scss['self-start'])}>
 <Grid container direction={'row'} alignContent={'flex-start'} spacing={32}>
 <Grid item>
 <a className={classNames(scss['btn'], scss['btn--green'])} href={'#'}>View Demo</a>
 </Grid>
 <Grid item>
 <a className={classNames(scss['btn'], scss['btn--green'])} href={'#'}>View Code</a>
 </Grid>
 </Grid>
 </Grid>
 </Grid>
 </Grid>
 </Grid>
 </Grid>
 </Grid>
 </div>
 </Grid>
 </Grid>
 </Grid>
 </Grid>
 </div>
 </div>
 );
 }*/

function SkillBox(props) {
  const { icons, category } = props;

  return (
    <div className={scss['feature-box']}>
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
        {icons.map((icon, index) => (
          <li key={icon.name}>
            <div className={scss['hover-icon']}>
              <SvgIcon
                aria-labelledby={scss['hover-icon__label']}
                title={icon.name}
                svgClass={scss['hover-icon']}
                size={'3rem'}
                gradientDirection={'horizontal'}
                backgroundStroke={icon.background}
              />
              <Typography
                variant={'body1'}
                component={'p'}
                className={scss['hover-icon__label']}
                font={'inherit'}
                color={'inherit'}
                align={'center'}>
                {icon.name}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard(props) {
  const { title, description, skills, color, backgroundClass, classes } = props;

  const [ detailsVisible, toggleDetails ] = React.useState(false);

  const renderSkills = skills => {
    const slice = skills.length > 5 ? skills.slice(0, 5) : skills;
    return slice.map((skill, index) => (
      <li className={index !== slice.length - 1 ? classes[`skills--${color}`] : null} key={skill}>
        {skill}
      </li>
    ));
  };

  return (
    <div>
      <Portal target={'root'}>
        {
          !detailsVisible
          ? null
          : <ProjectPopup
            images={[
              devStock1,
              devStock2,
              devStock3
            ]}
            heading={'PoshCalc'}
            subheading={'A native Android utility for resellers'}
            body={'PoshCalc is an Android only app built using native Java. PoshCalc intends to help online sellers achieve the highest possible return on investment when selling their products by performing calculations on the purchase price, desired profit, capital, fees, and applicable taxes. In addition, PoshCalc includes a \"coded\" legend that enables sellers to place innocuous reminders in their postings that provide a reminder as the the minimum and optimal selling price, without tipping off buyers. '}
            codeUrl={'https://github.com/dnnp2011/PoshCalc'}
            demoUrl={'#'}
            toggleVisible={toggleDetails}
            detailsVisible={detailsVisible}
            {...props}
          />
        }
      </Portal>
      <Grid className={scss['card']}>
        <div className={classNames(scss['card__side'], scss['card__side--back'], scss[`card__side--back-${color}`])}>
          <div className={scss['card__side--content']}>
            <p className={scss['card__cta']}>Take a look!</p>
            <div className={scss['card__cta-buttons']}>
              <a onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                toggleDetails(true);
              }} color={'inherit'} href={'#'} className={classNames(scss.btn, scss['card__cta-btn'])}>
                Details
              </a>
            </div>
          </div>
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
            <div>
              <p className={scss['card__details--description']}>{description || props.children}</p>
              <ul className={classNames(scss['card__details--skills'])}>{renderSkills(skills)}</ul>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

function Portal(props) {
  const { children, target } = props;

  return ReactDOM.createPortal(
    children, document.getElementById(target)
  );
}

function Story(props) {
  const { name, testimonial, highlight, position, classes, panelDirection, width, portraitSrc } = props;
  const firstName = name.split(' ')[0].toString()
                                      .toLowerCase();

  const isXs = width === 'xs';
  const isSmDown = isWidthDown('sm', width, true);

  return (
    <Grid item xs={12}>
      <Grid container direction={'row'} alignItems={'center'} font={'inherit'} color={'inherit'}>
        <div className={scss['story']}>
          <div className={scss['story__content']}>
            <figure className={scss['story__shape']}>
              <img src={portraitSrc} alt={name} className={scss['story__portrait']} />
              <figcaption className={scss['story__caption']}>
                <span>{name}</span>
                <br />
                <span>{position}</span>
              </figcaption>
            </figure>
            <div className={scss['story__text']}>
              <h3 className={classNames(scss['heading-tertiary'], scss['story__text--highlight'])}>{highlight}</h3>
              <p className={scss['story__text--testimonial']}>{testimonial}</p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

function BgVideo(props) {
  const { videoSrc, videoSrcAlt, videoClass } = props;
  const [ extension, ...rest ] = videoSrc.match(/((\b)(mp4|flv|webm|avi|wmv|mov|ogv){1}(\n|$){1})/);

  return (
    <div>
      <video className={videoClass} autoPlay muted loop>
        <source src={videoSrc} type={`video/${extension}`} />
        {
          videoSrcAlt.map((alt, index) => {
            const [ altExtension, ...altRest ] = alt.match(/((\b)(mp4|flv|webm|avi|wmv|mov|ogv){1}(\n|$){1})/);

            return (
              <source key={`${index}${altExtension}`} src={alt} type={`video/${altExtension}`} />
            );
          })
        }

        <div className={scss['bg-video__placeholder']} />
      </video>
    </div>
  );
}

function ContactForm(props) {
  const { classes, width, ...rest } = props;

  const [ name, handleNameChange ] = React.useState('');
  const [ email, handleEmailChange ] = React.useState('');
  const [ subject, handleSubjectChange ] = React.useState('');
  const [ message, handleMessageChange ] = React.useState('');
  const handleSubmit = e => {
    console.log('Contact form submitted');
  };

  return (
    <Grid container direction={'row'} alignContent={'center'} alignItems={'center'} justify={'space-around'}>
      <Grid item xs={12} sm={10} md={8}>
        <div className={scss.contact}>
          <div className={scss['contact__form']}>
            <form className={scss.form} onSubmit={handleSubmit}>
              <Grid
                container
                direction={'column'}
                spacing={16}
                alignContent={'flex-start'}
                alignItems={'flex-start'}
                justify={'space-evenly'}>
                <Grid
                  item
                  style={{
                    width: '20rem'
                  }}>
                  <Grid container direction={'row'} alignContent={'center'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction={'column'}
                        justify={'center'}
                        alignItems={'center'}
                        alignContent={'center'}
                        className={scss['heading-secondary']}>
                        <Typography
                          font={'inherit'}
                          color={'inherit'}
                          variant={'h2'}
                          component={'h2'}
                          className={classNames(
                            scss['heading-secondary__label'],
                            scss['heading-secondary__label--gradient']
                          )}>
                          Contact me
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    width: '20rem'
                  }}>
                  <Grid container direction={'row'} alignContent={'center'} justify={'space-around'}>
                    <Grid item xs={12}>
                      <div className={scss['form__group']}>
                        <input
                          id={'name'}
                          type={'text'}
                          placeholder={'Full Name'}
                          required
                          maxLength={30}
                          className={scss['form__input']}
                          value={name}
                          onChange={e => handleNameChange(e.target.value)}
                        />
                        <label className={scss['form__label']} htmlFor={'name'}>
                          Full Name
                        </label>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    width: '20rem'
                  }}>
                  <Grid container direction={'row'} alignContent={'center'} justify={'space-around'}>
                    <Grid item xs={12}>
                      <div className={scss['form__group']}>
                        <input
                          id={'email'}
                          type={'email'}
                          placeholder={'Email Address'}
                          required
                          maxLength={30}
                          className={scss['form__input']}
                          value={email}
                          onChange={e => handleEmailChange(e.target.value)}
                        />
                        <label className={scss['form__label']} htmlFor={'email'}>
                          Email Address
                        </label>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    width: '20rem'
                  }}>
                  <Grid container direction={'row'} alignContent={'center'} justify={'space-around'}>
                    <Grid item xs={12}>
                      <div className={scss['form__group']}>
                        <input
                          id={'subject'}
                          type={'text'}
                          maxLength={30}
                          placeholder={'Subject'}
                          required
                          className={scss['form__input']}
                          value={subject}
                          onChange={e => handleSubjectChange(e.target.value)}
                        />
                        <label className={scss['form__label']} htmlFor={'subject'}>
                          Subject
                        </label>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    width: '20rem'
                  }}>
                  <Grid container direction={'row'} alignContent={'center'} justify={'space-around'}>
                    <Grid item xs={12}>
                      <div className={scss['form__group']}>
                        <textarea
                          id={'message'}
                          type={'multiline'}
                          rows={'4'}
                          maxLength={1000}
                          placeholder={'Message'}
                          required
                          className={scss['form__input']}
                          value={message}
                          onChange={e => handleMessageChange(e.target.value)}
                        />
                        <label className={scss['form__label--multiline']} htmlFor={'message'}>
                          Message
                        </label>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    width: '20rem'
                  }}>
                  <Grid container direction={'row'} alignContent={'center'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={12}>
                      <div
                        className={scss['form__group']}
                        style={{
                          display: 'flex',
                          alignContent: 'center',
                          justifyContent: 'center'
                        }}>
                        <button
                          type={'submit'}
                          className={classNames(scss.btn, scss['btn--green'], scss['form__submit'])}>
                          Send
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
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
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      background: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]).isRequired,
      text: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ])
    })
  ).isRequired,
  category: PropTypes.string.isRequired
};
ProjectCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.oneOf([ 'orange', 'blue', 'green' ]).isRequired,
  backgroundClass: PropTypes.string.isRequired
};
Story.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  panelDirection: PropTypes.oneOf([ 'row', 'column' ]).isRequired,
  portraitSrc: PropTypes.string.isRequired
};
BgVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  videoSrcAlt: PropTypes.arrayOf(PropTypes.string),
  videoClass: PropTypes.string
};
ContactForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};
ProjectPopup.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  codeUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  width: PropTypes.string.isRequired,
  toggleVisible: PropTypes.func.isRequired,
  detailsVisible: PropTypes.bool.isRequired
};

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
