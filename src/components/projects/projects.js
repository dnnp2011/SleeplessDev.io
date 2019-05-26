import { Grid, Paper, Typography, withWidth } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import logoWithText from '../../assets/images/logo-terminal/logo_with_text.svg';
import whiteLogo from '../../assets/images/logo-terminal/white_logo_transparent_no_text_minified.png';
import michaelSzczech from '../../assets/images/portrait/Michael_Szczech_300x300_med.jpg';
import victoriaSaucier from '../../assets/images/portrait/Victoria_Saucier_300x300_med.jpg';
/* Project Screenshots */
import ares1 from '../../assets/images/screenshots/ares-1.png';
import ares2 from '../../assets/images/screenshots/ares-2.png';
import blackjack1 from '../../assets/images/screenshots/blackjack-1.png';
import blackjack2 from '../../assets/images/screenshots/blackjack-2.png';
import breakout1 from '../../assets/images/screenshots/breakout-1.png';
import breakout2 from '../../assets/images/screenshots/breakout-2.png';
import breakout3 from '../../assets/images/screenshots/breakout-3.png';
import cargoContainer1 from '../../assets/images/screenshots/cargo-container-1.jpg';
import cargoContainer2 from '../../assets/images/screenshots/cargo-container-2.jpg';
import cargoContainer3 from '../../assets/images/screenshots/cargo-container-rendered-1.jpg';
import coolcalc2 from '../../assets/images/screenshots/coolcalc-2.png';
import creek1 from '../../assets/images/screenshots/creek-1.jpg';
import creek2 from '../../assets/images/screenshots/creek-2.jpg';
import earthSpace1 from '../../assets/images/screenshots/earth-space-1.jpg';
import earthSpace2 from '../../assets/images/screenshots/earth-space-2.jpg';
import gainfy1 from '../../assets/images/screenshots/gainfy-1.png';
import gainfy2 from '../../assets/images/screenshots/gainfy-2.png';
import gunOptic1 from '../../assets/images/screenshots/gun-optic-1.jpg';
import gunOptic2 from '../../assets/images/screenshots/gun-optic-2.jpg';
import herome1 from '../../assets/images/screenshots/herome-1.png';
import poshcalc1 from '../../assets/images/screenshots/poshcalc-1.png';
import rockDodger1 from '../../assets/images/screenshots/rock-dodger-1.png';
import rockDodger2 from '../../assets/images/screenshots/rock-dodger-2.png';
import sleeplessdev1 from '../../assets/images/screenshots/sleeplessdev-1.jpg';
import sleeplessdev2 from '../../assets/images/screenshots/sleeplessdev-2.jpg';
import sleeplessdevBackend1 from '../../assets/images/screenshots/sleeplessdev-back-1.png';
import sleeplessdevBackend2 from '../../assets/images/screenshots/sleeplessdev-back-2.png';
import sleeplessRadio2 from '../../assets/images/screenshots/sleeplessradio-2.png';
import spaceInvaders1 from '../../assets/images/screenshots/space-invaders-1.png';
import spaceInvaders3 from '../../assets/images/screenshots/space-invaders-3.png';
import spaceShooter1 from '../../assets/images/screenshots/space-shooter-1.jpg';
import spaceShooter3 from '../../assets/images/screenshots/space-shooter-3.jpg';
import spaceship1 from '../../assets/images/screenshots/spaceship-1.jpg';
import spaceship2 from '../../assets/images/screenshots/spaceship-2.jpg';
import spaceship3 from '../../assets/images/screenshots/spaceship-3.jpg';
import steelDrum1 from '../../assets/images/screenshots/steel-drum-1.jpg';
import steelDrum2 from '../../assets/images/screenshots/steel-drum-2.jpg';
import survivalShooter2 from '../../assets/images/screenshots/survival-shooter-2.jpg';
import survivalShooter5 from '../../assets/images/screenshots/survival-shooter-5.jpg';
import survivalShooter6 from '../../assets/images/screenshots/survival-shooter-6.jpg';
import tacticalGrip1 from '../../assets/images/screenshots/tactical-grip-1.jpg';
import tacticalGrip2 from '../../assets/images/screenshots/tactical-grip-2.jpg';
import tanks1 from '../../assets/images/screenshots/tanks-1.jpg';
import tanks2 from '../../assets/images/screenshots/tanks-2.jpg';
import tanks3 from '../../assets/images/screenshots/tanks-3.jpg';
import tictactoe1 from '../../assets/images/screenshots/tictactoe-1.png';
import zombieShooter2 from '../../assets/images/screenshots/zombie-shooter-2.jpg';
import zombieShooter3 from '../../assets/images/screenshots/zombie-shooter-3.jpg';
import zombieShooter5 from '../../assets/images/screenshots/zombie-shooter-5.jpg';
import storyBgVideo from '../../assets/video/falling_sparks_water_2k_minified.mp4';
import storyBgVideoAlt from '../../assets/video/mt_baker.webm';
import storyBgVideoAlt2 from '../../assets/video/snow_motion.ogv';
import * as devicons from '../widgets/svg-icon/Devicons';
import SvgIcon from '../widgets/svg-icon/SvgIcon';
import ParticleSystemCanvas from './components/particle-system-canvas/particle-system-widget.component';
import scss from './projects.module.scss';
import themeStyles from './projects.style';
import * as Const from '../../helpers/Const';

//TODO: Make Projects Navigation spans transform color to primary green on hover or focus
//TODO: Fix the focus changing order upon opening the navigation menu
//TODO: Make the two columns of body text on the Project Popups condense to a single column on small screens
//TODO: Root panel x-scrolls on mobile
//TODO: Story Cards are too wide on mobile devices
//TODO: Look into faster scrolling methods on mobile devices (like a table of contents that appears on scroll or hover)
//BUG: Favicon not loading consistently (invalid resource size in manifest)
//BUG: Unable to reach backend blog store

class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bgVideo: null,
      navVisible: false,
      closePopup: null,
      openPopupBtn: null
    };

    this.closePopup = React.createRef();
  }

  componentDidMount() {
    document.title = 'Portfolio | SleeplessDev';
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

  componentWillUnmount() {
    document.title = 'SleeplessDev';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Set focus to the popup close button upon opening for accessibility
    if (prevState.closePopup !== this.state.closePopup && this.state.closePopup !== null) {
      this.state.closePopup.focus();
    }
  }


  toggleNav = () => {
    this.setState((state, props) => ({
      navVisible: !state.navVisible
    }));
  };

  onPopupMounted = ref => {
    this.setState({ closePopup: ref });
  };

  onPopupOpened = ref => {
    this.setState({ openPopupBtn: ref });
  };


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.width !== nextProps.width || this.state !== nextState;
  }


  render() {
    const { classes, width, history } = this.props;
    const { bgVideo, navVisible } = this.state;

    const iconCategories = {
      languages: [
        devicons.Javascript.plain,
        devicons.CSharp.plain,
        devicons.Html5.plain,
        devicons.Css3.plain,
        devicons.Php.plain,
        devicons.Sql.wordmarked,
        devicons.Java.plain,
        devicons.Typescript.plain,
        devicons.Python.plain,
        devicons.Ruby.plain
      ],
      frontend: [
        devicons.React.plain,
        devicons.Firebase.wordmarked,
        devicons.Jquery.plain,
        devicons.Bootstrap.plain,
        devicons.Sass.plain,
        devicons.Pug.plain,
        devicons.MaterialUi.plain,
        devicons.PassportJS.plain
      ],
      backend: [
        devicons.NodeJs.plain,
        devicons.MongoDb.plain,
        devicons.Express.plain,
        devicons.GraphQl.plain,
        devicons.Linux.plain,
        devicons.Bash.wordmarked,
        devicons.Docker.plain,
        devicons.Apache.plain,
        devicons.Nginx.plain,
        devicons.Django.plain,
        devicons.Debian.plain,
        devicons.Ubuntu.plain
      ],
      mobile: [
        devicons.Android.plain,
        devicons.ReactNative.plain
      ],
      'game dev': [
        devicons.Unity.plain,
        devicons.Xna.plain,
        devicons.Blender.plain,
        devicons.Maya.plain,
        devicons.Audacity.plain
      ],
      tools: [
        devicons.Git.plain,
        devicons.PfSense.plain,
        devicons.OpenVpn.plain,
        devicons.FreeNas.plain,
        devicons.XenServer.plain,
        devicons.Ssh.plain,
        devicons.ChromeDevTools.plain,
        devicons.AmazonWebServices.plain
      ],
      other: [
        devicons.Gimp.plain,
        devicons.Atom.plain,
        devicons.Bitbucket.plain,
        devicons.Github.plain,
        devicons.Trello.plain,
        devicons.IntelliJ.plain,
        devicons.Webstorm.plain,
        devicons.PhpStorm.plain,
        devicons.Vim.plain,
        devicons.VisualStudio.plain,
        devicons.Windows.plain
      ]
    };
    // Flip container to column on mobile screens.
    const panelDirection = width === 'xs' ? 'column' : 'row';
    const isSm = isWidthDown('sm', width, true);

    return (
      <div id={'project-root'} className={scss.projectRoot}>
        <div className={scss.navigation}>
          <input checked={navVisible} onChange={() => {}} className={scss['navigation__checkbox']} type={'checkbox'} id={'nav-toggle'} />
          <label tabIndex={1} htmlFor={'#nav-toggle'} onClick={this.toggleNav} onKeyDown={e => e.key === 'Enter' && this.toggleNav()} className={scss['navigation__button']}>
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
                <a href={''} onClick={() => history.push(Const.HrefHome)} className={scss['navigation__link']}>Home</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={''} onClick={() => history.push(Const.HrefAbout)} className={scss['navigation__link']}>About Me</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={''} onClick={() => history.push(Const.HrefContact)} className={scss['navigation__link']}>Contact Me</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={''} onClick={() => history.push(Const.HrefBlog)} className={scss['navigation__link']}>Blog</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={Const.CreddleResumeLink} rel={'noreferrer noopener nofollow'} target={'_blank'} className={scss['navigation__link']}>Resume</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={Const.LinkedIn} rel={'noreferrer noopener nofollow'} target={'_blank'} className={scss['navigation__link']}>LinkedIn</a>
              </li>
              <li className={scss['navigation__item']}>
                <a href={Const.Github} rel={'noreferrer noopener nofollow'} target={'_blank'} className={scss['navigation__link']}>Github</a>
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
                {/* TODO: Improve responsiveness of HTML Canvas Animation */}
                {
                  width === 'xs'
                  ? <ParticleSystemCanvas
                    diameterRange={{
                      min: 600,
                      max: 850
                    }}
                    xAxisOffset={-50}
                    yAxisOffset={-50}
                    xSpawnOffset={-450}
                    ySpawnOffset={-200}
                    particleCount={400}
                    sizeRange={{
                      min: 5,
                      max: 15
                    }}
                    angularVelocity={0.001}
                  />
                  : width === 'sm'
                    ? <ParticleSystemCanvas
                      diameterRange={{
                        min: 700,
                        max: 900
                      }}
                      xAxisOffset={150}
                      yAxisOffset={-200}
                      xSpawnOffset={-450}
                      ySpawnOffset={-200}
                      particleCount={500}
                      sizeRange={{
                        min: 5,
                        max: 15
                      }}
                      angularVelocity={0.001}
                    />
                    : width === 'md'
                      ? <ParticleSystemCanvas
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
                      : width === 'xl'
                        ? <ParticleSystemCanvas
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
                        : <ParticleSystemCanvas
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
                }

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
                        href={''}
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          const projectsSection = document.querySelector('#section-projects');
                          const intersectionObserver = new IntersectionObserver(entries => {
                            const [ entry ] = entries;
                            if (entry.isIntersecting) {
                              setTimeout(() => {
                                const position = document.body.scrollTop;
                                projectsSection.focus();
                                document.body.scrollTop = position;
                              }, 50);
                            }
                          });
                          intersectionObserver.observe(projectsSection);
                          projectsSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'start'
                          });
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
            <Grid item>
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
                        direction={isSm ? 'column' : 'row'}
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
                                  Who I Am
                                </Typography>
                                <Typography
                                  font={'inherit'}
                                  color={'inherit'}
                                  component={'p'}
                                  className={scss.paragraph}
                                  gutterBottom
                                  variant={'body1'}>
                                  My name is Dalton Pierce, the developer behind SleeplesDev. When I set my mind to something, I dive in head first and dedicate
                                  myself to achieving those goals. It's this perseverance and willingness to learn new things that has helped me to become the self-taught
                                  developer that I am. Programming and technology is not simply my job, it's what I live and breath; It's what I'm passionate about.
                                  That passion means that putting my skills to use, or adding new development tools to my toolbox isn't a chore, but is instead a fun -
                                  though often challenging - problem solving exercise.
                                  <br /><br />
                                  I enjoy attending meetups and conferences to learn about the latest technologies and network with fellow developers.
                                  I strive to maintain the perspective of a newcomer, and to avoid becoming jaded by what I think I know. Whatever I do,
                                  I endeavour to do it to the best of my ability. I'm confident that with my existing skills, as well as my willingness
                                  and aptitude for learning, I will quickly become an asset to new teams and projects. I look forward to putting
                                  my knowledge to use, and to learning new techniques, architectures, frameworks, languages, and conventions from
                                  other experienced developers!
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  font={'inherit'}
                                  color={'inherit'}
                                  variant={'subtitle1'}
                                  component={'h3'}
                                  className={scss['heading-tertiary']}>
                                  What I Can Offer
                                </Typography>
                                <Typography
                                  font={'inherit'}
                                  color={'inherit'}
                                  component={'p'}
                                  className={scss.paragraph}
                                  gutterBottom
                                  variant={'body1'}>
                                  As a developer, I bring to the table my experience with numerous programming languages such as Javascript, C#, PHP, SQL, Java,
                                  Ruby, and Python; Knowledge of a number of development tools and frameworks for both front-end and back-end including React,
                                  Node, Express, MongoDB, MySQL; Experience working on, and even leading teams of developers during the Gainfy STO and Ares projects respectively.
                                  During these projects, I gained a wealth of knowledge during these projects
                                  about how to coordinate work across a team, how to deal with code conflicts, how to use external tools to facilitate
                                  bug fixes and work assignments, as well as sticking to the roadmap and maintain deadlines while not creating and stressful environment and
                                  allowing for creative freedom.
                                  <br /><br />
                                  Beyond this programming-specific knowledge, my passion for technology as a whole has introduced me to many other interesting
                                  fields, such as networking and firewalls, using Linux servers and navigating the command line, creating and utilizing
                                  virtual machines, building and maintaining PC and server hardware, component-level soldering, managing network attached
                                  resources (web servers, Domain Name System servers, Virtual Private Network tunnels, network security devices, routers, and
                                  switches), as well as an understanding of cyber security vulnerabilities and defenses.
                                </Typography>
                              </Grid>
                              <Grid item>
                                <a href={''} onClick={() => history.push(Const.HrefAbout)} className={scss['btn-text']}>
                                  Go to resume &rarr;
                                </a>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm={12} md>
                          <Grid
                            container
                            direction={panelDirection}
                            alignContent={'center'}
                            justify={'center'}
                            style={isSm ? { margin: '5rem 3rem' } : { top: '20%' }}
                            className={scss['composition']}>
                            <img
                              className={classNames(scss['composition__photo'], scss['composition__photo--p1'])}
                              color={'inherit'}
                              aria-label={'composition 1'}
                              alt={'composition 1'}
                              src={ares2}
                            />
                            <img
                              className={classNames(scss['composition__photo'], scss['composition__photo--p2'])}
                              color={'inherit'}
                              aria-label={'composition 3'}
                              alt={'composition 3'}
                              src={zombieShooter5}
                            />
                            <img
                              className={classNames(scss['composition__photo'], scss['composition__photo--p3'])}
                              color={'inherit'}
                              aria-label={'composition 2'}
                              alt={'composition 2'}
                              src={survivalShooter5}
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
                        direction={isSm ? 'column' : 'row'}
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

                <section tabIndex={0} id={'section-projects'} className={scss['section-projects']}>
                  <Grid container direction={'column'} spacing={16} alignItems={'center'} alignContent={'center'}>
                    <Grid item>
                      <Grid className={scss['heading-secondary']} style={{ marginTop: '1.2rem' }}>
                        <Typography
                          id={'projects-header'}
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
                        spacing={32}
                        direction={'column'}
                        alignContent={'center'}
                        alignItems={'center'}
                      >
                        <Grid item className={scss['section-container']}>
                          <div className={scss['projects__software']}>
                            <h4 className={scss['projects__software--label']} id={'software-label'}>
                              Software
                            </h4>
                          </div>
                          <Grid
                            container
                            spacing={40}
                            alignContent={'center'}
                            alignItems={'center'}
                            justify={'space-evenly'}
                            className={scss.projects}
                          >
                            <Grid item>
                              <ProjectCard
                                title={'Gainfy STO'}
                                subtitle={'The face of Gainfy Enterprises\' Security Token Offering'}
                                description={'The web presence of Gainfy\'s Security Token Offering'}
                                body={`<div>
                                Frontend of Gainfy's Security Token Offering. Gainfy is a data-driven platform
                                used to reward healthy behaviors, enable healthcare management and data monetization within a single, blockchain powered
                                infrastructure. The website had such features as integrated <abbr title='Know Your Client'>KYC</abbr>, ability to purchase
                                Gain tokens via Bitcoin or Ethereum through the web interface, a regularly updated transactions panel for canceling or verifying
                                contributions, client authentication with Firebase, account recovery mechanisms, <abbr title='Two Factor Authentication'>2FA</abbr>,
                                a refer a friend feature that rewards users for bringing traffic to the site, and a dashboard for users to track their own contributions
                                and overall coin supply.
                                </div>`}
                                codeUrl={null}
                                demoUrl={null}
                                skills={[
                                  'Javascript', 'PHP', 'SQL', '2FA Implementation', 'HTML', 'CSS', 'Linux Server', 'AWS'
                                ]}
                                images={[
                                  /* TODO: Get better close ups of the Gainfy features -- too small to see right now */
                                  gainfy1,
                                  gainfy2
                                ]}
                                color={'orange'}
                                backgroundClass={classes.GainfyBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Ares Project'}
                                subtitle={'An administration tool for cryptocurrency token offerings'}
                                description={'A blockchain ICO / STO administration tool for Citdex and the OrchardBlock Accelerator'}
                                body={`An ambitious concept to streamline the token offering experience for Citdex clients. As lead developer
                                I organized a team of 6 developers to create a management infrastructure for up and coming cryptocurrencies. We aimed
                                to make it easier for clients to launch their token offerings, as well as provide a marketplace to connect savvy investors to those offerings.`}
                                codeUrl={null}
                                demoUrl={null}
                                skills={[
                                  'React', 'Javascript', 'Nodejs', 'Firebase / Firestore', 'Leadership', 'Project Management'
                                ]}
                                images={[
                                  ares1,
                                  ares2
                                ]}
                                color={'green'}
                                backgroundClass={classes.AresBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'SleeplessDev Website'}
                                subtitle={'An excellent example of my programming knowledge, as well as a helpful collection of developer tools'}
                                description={'The culmination of all my development knowledge, and my personal portfolio'}
                                body={`SleeplessDev.io serves primarily as a sample of my programming aptitude. The combination of pleasant and appealing design,
                                clean and efficient code, and security conscious implementation, thoroughly exemplifies my programming style. It's important to me that I incorporate the lessons I've learned throughout
                                disparate subjects into my work. In so doing, I avoid getting tunnel vision - being so engrossed in one aspect of development
                                that I cut corners in others (focusing on design at the exclusion of security is one such example).
                                Additionally, utilizing the tools and conventions of different specialties helps me to create a more attractive and
                                well rounded product.`}
                                codeUrl={'https://github.com/dnnp2011/SleeplessDev.io'}
                                demoUrl={null}
                                skills={[
                                  'React', 'Nodejs', 'MongoDB', 'GraphQL', 'Pug', 'Bootstrap', 'Material-UI', 'Microservices', 'Web Hosting'
                                ]}
                                images={[
                                  sleeplessdev1,
                                  sleeplessdev2
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SleeplessDevBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'SleeplessDev Backend'}
                                subtitle={'The infrastructure that supports the SleeplessDev website'}
                                description={'The infrastructure that supports the SleeplessDev website'}
                                body={`The SleeplessDev backend is the backbone of SleeplessDev.io, providing functionality to frontend services such as
                                my blog, tutorial collection, reference repository, authentication, as well as serving content as needed.
                                The backend is built primarily with Node.js, Express,
                                and <abbr title='A document based (NoSQL) database technology'>MongoDB</abbr>. However, supplemental technologies
                                are also present, and serve to provide more narrow functionality. GraphQL
                                is used to facilitate communication and passing of content between the backend and frontend; Pug is the
                                <abbr title='Hyper Text Markup Language'>HTML</abbr> template
                                language used to quickly and efficiently construct the interfaces of the backend management dashboard, which is then stylized
                                by Bootstrap. The backend dashboard acts as a restricted area for me to alter admin settings, create new blog, tutorial, or
                                reference entries, and review the endpoints of my GraphQL <abbr title='Application Programming Interface'>API</abbr>`}
                                codeUrl={null}
                                demoUrl={'https://backend.sleeplessdev.io'}
                                skills={[
                                  'React', 'Nodejs', 'MongoDB', 'GraphQL', 'Pug', 'Bootstrap', 'Material-UI', 'Microservices', 'Web Hosting'
                                ]}
                                images={[
                                  sleeplessdevBackend1,
                                  sleeplessdevBackend2
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SleeplessDevBackendBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Zombie Shooter'}
                                subtitle={'A wave-based zombie shooter built in Unity, inspired by Call of Duty\'s "Zombies" game mode'}
                                description={`A wave-based zombie shooter built in Unity, inspired by Call of Duty's "Zombies" game mode`}
                                body={`The origin story of my zombie game addiction begins with Call of Duty: World at War. Not with the traditional multiplayer
                                mode, but with the - at the time - brand new game mode: Nazi Zombies! Inspired by those memories of fighting of wave after wave of
                                tireless zombies, i set out to create my own version. The result of that endeavour is this Zombie Shooter (not the final name).
                                Although still a work in progress, is has a solid foundation for future additions, such as developer tooling to streamline
                                addition of new content, extensible AI manager with a dynamic wave difficulty algorithm, a wide array of player and zombie
                                animations, and immersive bullet effects (blood spatter, and bullet holes, etc).`}
                                codeUrl={null}
                                demoUrl={'https://youtu.be/qFufWuPpbLw'}
                                skills={[
                                  'C#',
                                  'Unity3D',
                                  'Developer Tooling',
                                  'AI Programming',
                                  '3D Modeling',
                                  'Animation'
                                ]}
                                images={[
                                  zombieShooter2,
                                  zombieShooter3,
                                  zombieShooter5
                                ]}
                                color={'blue'}
                                backgroundClass={classes.ZombieShooterBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Space Invaders'}
                                subtitle={'A remake of the classic arcade game of the same name, creating in C# and Microsoft\'s XNA Framework'}
                                description={'A remake of the classic arcade game of the same name, creating in C# and Microsoft\'s XNA Framework'}
                                body={`One of my very first games, built using Microsoft's now obsolete XNA Game Studio, I created a Windows arcade game
                                based upon the 70's classic of the same name. Complete with ambient chiptune music, dynamic scrolling enemies, spritesheet
                                animations, and a number of player sound effects, Space Invaders creates an entertaining recreation of a fondly remembered
                                classic.`}
                                codeUrl={'https://github.com/dnnp2011/SpaceInvaders-XNA'}
                                demoUrl={null}
                                skills={[
                                  'C#', 'XNA Framework', 'Game Design', 'Spritesheet Animation', 'Sound Design'
                                ]}
                                images={[
                                  spaceInvaders1,
                                  spaceInvaders3
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SpaceInvaderBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Poshcalc'}
                                subtitle={'A native Android application to help online reseller price their goods with the ideal <abbr title=\'Return On Investment\'>ROI</abbr>'}
                                body={`PoshCalc is an Android only app built using native Java. PoshCalc intends to help online sellers achieve the highest possible return on investment when selling their products by performing calculations on the purchase price, desired profit, capital, fees, and applicable taxes. In addition, PoshCalc includes a coded legend that enables sellers to place innocuous reminders in their postings that provide a reminder as the the minimum and optimal selling price, without tipping off buyers.`}
                                codeUrl={'https://github.com/dnnp2011/PoshCalc'}
                                demoUrl={null}
                                skills={[
                                  'Java', 'Native Android Development', 'XML', 'MVC Architecture', 'Launching Applications'
                                ]}
                                images={[ poshcalc1 ]}
                                color={'green'}
                                backgroundClass={classes.PoshCalcBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              >
                                A native Android application to help online reseller price their goods with the ideal <abbr title='Return On Investment'>ROI</abbr>
                              </ProjectCard>
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Sleepless Radio'}
                                subtitle={'A native Android music player with some catchy tunes'}
                                description={'A native Android music player with some catchy tunes'}
                                body={`Sleepless Radio is a native Android application based on the traditional radio concept of stations and songs. The app makes
                                abundant use of Android's recycler view data structure in order to provide a smooth and efficient means of scrolling through very
                                long content without loading or stuttering. Sleepless Radio includes a variety of built in instrumental songs distributed between
                                several stations. The application also includes a media bar that appears upon playing a song to allow users to easily control
                                playback from anywhere in the app.`}
                                codeUrl={'https://github.com/dnnp2011/SleeplessRadio'}
                                demoUrl={null}
                                skills={[
                                  'Java', 'Native Android Development', 'XML', 'MVC Architecture', 'Recycler Views', 'Media Management'
                                ]}
                                images={[ sleeplessRadio2 ]}
                                color={'blue'}
                                backgroundClass={classes.SleeplessRadioBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'CoolCalc'}
                                subtitle={'An Android calculator app that... calculates!'}
                                description={'An Android calculator app that... calculates!'}
                                body={`A native Android calculator application that does exactly what you might expect. CoolCalc has a unique button layout,
                                as well as vibrantly pleasant icons. Can perform all the basic calculator functions that users expect, and implements
                                a basic history functionality for performing a chain of operations of many numbers.`}
                                codeUrl={'https://github.com/dnnp2011/CoolCalc'}
                                demoUrl={null}
                                skills={[
                                  'Java', 'XML', 'Native Android Development', 'Constraint Layouts', 'Input History'
                                ]}
                                images={[ coolcalc2 ]}
                                color={'green'}
                                backgroundClass={classes.CoolCalcBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Breakout'}
                                subtitle={'A C# remake of the 70\'s arcade game: Breakout, using Microsoft\'s XNA Framework'}
                                description={'A C# remake of the 70\'s arcade game: Breakout, using Microsoft\'s XNA Framework'}
                                body={`A recreation of the 70's arcade game: Breakout! Developed using Microsoft's now obsolete XNA Game Studio and programmed in C#
                                with the goal of emulating the same arcade experience of the original. Breakout includes the familiar chiptune music and sound effects
                                that were standard in classic arcade games.`}
                                codeUrl={'https://github.com/dnnp2011/Breakout-XNA'}
                                demoUrl={null}
                                skills={[
                                  'C#', 'XNA Framework', 'Game Design', 'Animation', 'Sound Design'
                                ]}
                                images={[
                                  breakout1,
                                  breakout2,
                                  breakout3
                                ]}
                                color={'blue'}
                                backgroundClass={classes.BreakoutBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Rock Dodger'}
                                subtitle={'A web-based obstacle avoidance game made entirely with Javascript. Dodge the falling rocks, and keep your avatar alive as long as possible!'}
                                description={'A web-based obstacle avoidance game made entirely with Javascript. Dodge the falling rocks, and keep your avatar alive as long as possible!'}
                                body={`An excellent lesson on browser animation and gamification, Rock Dodger is just complex enough to provide vital insights
                                on creating and managing game loops for an in-browser experience.`}
                                codeUrl={'https://github.com/dnnp2011/Rock-Dodger'}
                                demoUrl={null}
                                skills={[ 'Javascript', 'Game Design', 'Web Animations' ]}
                                images={[
                                  rockDodger1,
                                  rockDodger2
                                ]}
                                color={'orange'}
                                backgroundClass={classes.RockDodgerBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Blackjack'}
                                subtitle={'A full C# Blackjack card game, played in the command line and complete with ASCII card faces'}
                                description={'A full C# Blackjack card game, played in the command line and complete with ASCII card faces'}
                                body={`My very first game, Blackjack is a command line emulation of the well-known Blackjack card game. The goal
                                is to achieve a higher collective score (determined by the product of all your card values) than the dealer,
                                without going over the maximum of 21. There's not much elaboration to be done on a command line card game, however
                                one fun addition was the inclusion of <abbr title='A standard for converting English characters and symbols into code'>
                                ASCII</abbr> card faces.`}
                                codeUrl={'https://github.com/dnnp2011/blackjack-console-application'}
                                demoUrl={null}
                                skills={[
                                  'C#', 'Standard IO', 'Game Design', 'OOP'
                                ]}
                                images={[
                                  blackjack1,
                                  blackjack2
                                ]}
                                color={'green'}
                                backgroundClass={classes.BlackjackBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Ruby-Tac-Toe'}
                                subtitle={'A command line game of Tic-Tac-Toe you can play with a friend, built in the Ruby programming language'}
                                description={'A command line game of Tic-Tac-Toe you can play with a friend, built in the Ruby programming language'}
                                body={`Ruby Tic Tac Toe is a command line executable in which a Tic Tac Toe board is represented by an array of strings. The board object is then passed to each sequential method as an argument so the helper method can interact with or introspect on the board. User interaction and collected via Ruby gets in which each player will choose a position on the board by entering a number 1-9, representing the selected square starting from the top left as 1 to the bottom right as 9. The game manager keeps track of the number of moves played so that a stale match is detected, as well checks each move if a player has won.`}
                                codeUrl={'https://github.com/dnnp2011/Ruby-Tic-Tac-Toe-2'}
                                demoUrl={null}
                                skills={[
                                  'Ruby', 'Game Design', 'State Management', 'Testing'
                                ]}
                                images={[ tictactoe1 ]}
                                color={'blue'}
                                backgroundClass={classes.TicTacToeBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Survival Shooter'}
                                subtitle={'A quirky survival shooter in which the player fights off waves of unique enemies for as long as possible'}
                                description={'A quirky survival shooter in which the player fights off waves of unique enemies for as long as possible'}
                                body={`Survival Shooter is a waved based shooter in which a child dreams of fighting off waves of corrupted stuffed animals within a nightmarish version of his own room. Built in Unity, and programmed in C#, Survival Shooter makes use of many of the advanced features of the Unity engine to craft a compelling gameplay experience. For example, using the AI Navmesh to generate valid path finding for enemy units, Raycasting for weapon hit detection, using the Unity physics engine and its associated elements (colliders, rigidbodies) to detect physical collisions. Due to the massive size of the source game files, with the required dll's and other compiled dependencies, 3D Models, animations, sounds, and other game assets - the Git repository had to be prioritized with the most important aspects of gameplay that could be easily demonstrated. Therefore, the attached code link contains only the manually coded scripts that implement the logic of gameplay. Although these scripts are vital to the functioning of Survival Shooter, they only tell part of the story. There is still much more work done within Unity's built-in systems and tools that could not be converted to a Git friendly format.`}
                                codeUrl={'https://github.com/dnnp2011/SurvivalShooter-Unity'}
                                demoUrl={null}
                                skills={[
                                  'Unity3D', 'C#', 'AI Programming', 'Animation', 'Sound Design'
                                ]}
                                images={[
                                  survivalShooter5,
                                  survivalShooter6,
                                  survivalShooter2
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SurvivalShooterBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Space Shooter'}
                                subtitle={'A scrolling shooter set in space in which the player must avoid or destroy a constant barrage of enemies and asteroids'}
                                description={'A scrolling shooter set in space in which the player must avoid or destroy a constant barrage of enemies and asteroids'}
                                body={`In Space Shooter, you play as a space ship flying across the galaxy, trying to get home across the vastness of space. Blocking your way are dangerous asteroids that can be destroyed or dodged, as well as enemy ships. Little is known about these alien vessels - besides the fact that they shoot on sight. If you want to live long enough to see home, you may want to do the same!
                                Space Shooter is built in the Unity game engine. Although the game appears to be 2-dimensional, all of the models, animations, and effects are in fact 3D. A top-down camera angle is used to provide a two-demensional impression, while maintaining the interesting depth and perspective effects of moving in 3D space. Space hazards are spawned in random positions just beyond the player's view to provide a varied and random challenge for the player. The background movement effect is achieved by stretching the background beyond the clipping plane of the primary camera, then sliding it down and wrapping it back on itself once it reaches the end. The result of these features is the appearance of movement through an infinite environment.`}
                                codeUrl={'https://github.com/dnnp2011/SpaceShooter-Unity'}
                                demoUrl={'https://drowsy.gamejolt.io/SpaceShooterGame'}
                                skills={[
                                  'C#', 'Unity3D', 'Game Design', 'Sound Design', 'AI Programming'
                                ]}
                                images={[
                                  spaceShooter1,
                                  spaceShooter3
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SpaceShooterBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'TANKS!'}
                                subtitle={'A round-based tank vs tank battle you can play against friends on a single PC'}
                                description={'A round-based tank vs tank battle you can play against friends on a single PC'}
                                body={`TANKS is an isometric, round-based, player vs player arena battle. Each player must pilot their tanks, and attempt to destroy their opponent while simultaneously dealing with incoming fire, and attempting to correctly range their own shots. In TANKS, both players control their tanks from the same keyboard. The blue tank in the top-left is controlled by the AWSD keys, and can fire using the spacebar. On the other hand, the red tank in the bottom-right is controlled via the arrow keys, and may fire their main gun using the enter key.

                                One of the interesting features of TANKS is the dynamic camera zoom. It is constantly adjusting its zoom and position in order to keep both players in view at all times - an important feature when both players are controlling their avatars from a single computer. Like several of my other games, TANKS was also built using the Unity game engine.`}
                                codeUrl={'https://github.com/dnnp2011/Unity-TANKS'}
                                demoUrl={null}
                                skills={[
                                  'Unity3D', 'C#', 'Animation', 'Sound Design', 'State Management'
                                ]}
                                images={[
                                  tanks1,
                                  tanks2,
                                  tanks3
                                ]}
                                color={'green'}
                                backgroundClass={classes.TanksBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Hero Me'}
                                subtitle={'A linear Android application in which the user selects various superhuman qualities to design their own version of their favorite superheros'}
                                description={'A linear Android application in which the user selects various superhuman qualities to design their own version of their favorite superheros'}
                                body={`Hero Me is a native Android application which can basically be described as a user interface demo. The feature set consists solely or clicking through a few screens. However, the real benefit of working on this app was learning to create and organize various interfaces, interacting with user touch input to navigate between activities and fragments, using custom color gradients to match a theme palette, and other foundational skills.w`}
                                codeUrl={'https://github.com/dnnp2011/HeroMe'}
                                demoUrl={null}
                                skills={[
                                  'Java', 'XML', 'Native Android Development', 'UI Design'
                                ]}
                                images={[ herome1 ]}
                                color={'orange'}
                                backgroundClass={classes.HeroMeBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        <hr className={scss['horizontal-rule']} />
                        {/* TODO: Change project text to a variation of the format: Brief Description (1-2 sentences), Objectives, Challenges, My Solutions */}
                        <Grid item className={scss['section-container']}>
                          <div className={scss['projects__design']}>
                            <h4 className={scss['projects__design--label']} id={'software-label'}>
                              Art and Design
                            </h4>
                          </div>
                          <Grid
                            container
                            spacing={40}
                            alignContent={'center'}
                            alignItems={'center'}
                            justify={'space-evenly'}
                            className={scss.projects}
                          >
                            <Grid item>
                              <ProjectCard
                                title={'Serene Creek'}
                                subtitle={'A 3D scene containing several custom made models and effects to create this relaxing creek-side view'}
                                description={'A 3D scene containing several custom made models and effects to create this relaxing creek-side view'}
                                body={`Serene Creek is a complex scene made up of many individual models that were either hand placed, as in the case of the large rocks, or dynamically placed using a weight paint map like the grass and flowers. These environmental elements were placed atop a base layer that represents the curved ground making up the creek bed. In the center of the creek I placed a fluid and configured it to flow down the natural incline of the creek bed. I then added various blur and lighting effects to improve the appearance of motion once I rendered a static image.`}
                                codeUrl={null}
                                demoUrl={null}
                                skills={[
                                  'Blender', 'UV Unwrapping', 'Texturing', '3D Modeling', 'Weight Paint'
                                ]}
                                images={[
                                  creek1,
                                  creek2
                                ]}
                                color={'green'}
                                backgroundClass={classes.CreekBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Earth'}
                                subtitle={'A 3D render of Earth and the Sun with custom shaders'}
                                description={'A 3D render of Earth and the Sun with custom shaders'}
                                body={`This Blender made scene contains the Earth illuminated by the Sun, with a beautiful nebula in the background. The sun is a Blender sun lamp and a simple emissive sphere; various camera effects were applied to these objects (such as the lens flare). The Earth itself is made up of many layers of textures to provide detail to the oceans, continents, clouds, nighttime lights, and atmosphere. Additionally, a custom shader was created to create the refraction effect at the edge of Earth's atmosphere.`}
                                codeUrl={null}
                                demoUrl={null}
                                skills={[
                                  'Blender', 'Shader Programming', 'UV Unwrapping', 'Texturing', '3D Modeling'
                                ]}
                                images={[
                                  earthSpace1,
                                  earthSpace2
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SpaceBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Space Ship'}
                                subtitle={'3D model of a single-seat, short range space craft built in Autodesk\'s Maya'}
                                description={'3D model of a single-seat, short range space craft built in Autodesk\'s Maya'}
                                body={`This space ship model is one of the most geometrically complex objects I've created, consisting of numerous separate pieces attached into on cohesive whole. The cockpit glass has a custom reflective material, the engines use an emissive material to give the appearance of heat. I also created an alien planet and refuel station to provide a backdrop for the space craft.`}
                                codeUrl={null}
                                demoUrl={null}
                                skills={[
                                  'Maya',
                                  'Scene Animation',
                                  'UV Unwrapping',
                                  'Texturing',
                                  '3D Modeling'
                                ]}
                                images={[
                                  spaceship1,
                                  spaceship2,
                                  spaceship3
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SpaceShipBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Cargo Container'}
                                subtitle={'3D model of a standard cargo shipping container, built in Blender and textured in Substance Painter'}
                                description={'3D model of a futuristic cargo shipping container, built in Blender and textured in Substance Painter'}
                                body={`Created as a game asset, Cargo Container contains many visually appealing details such as the hexagonal shape on the doors, the locking bars, and an interesting cross-beam structure on the sides of the container. Together, these items create a sense of familiarity with modern cargo containers, but use enough unique differences to give a futuristic, sci-fi impression. Substance Painter was utilized for the texturing of this model, which includes many great tools to create the appearance of wear, scratches, and stress on the container's exterior.`}
                                codeUrl={null}
                                demoUrl={'https://skfb.ly/6JyRG'}
                                skills={[
                                  'Blender', 'Substance Painter', 'UV Unwrapping', 'Texturing', '3D Modeling'
                                ]}
                                images={[
                                  cargoContainer1,
                                  cargoContainer2,
                                  cargoContainer3
                                ]}
                                color={'green'}
                                backgroundClass={classes.CargoContainerBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Steel Barrel'}
                                subtitle={'3D model of a simple - yet elegant, steel drum created with Blender'}
                                description={'3D model of a simple - yet elegant, steel drum created with Blender'}
                                body={`Another model intended as a game asset, this Steel Barrel was crafted in reference to real-world oil  barrels and the like. The cylindrical creases around the perimeter of the body provide additional structural integrity, the large valve on top is used for pouring the liquid contained within, and the smaller valve is meant to allow air into the container to take the place of the fluid being emptied. Each of these components is a separate model to ease the process of applying different material textures to the pieces.`}
                                demoUrl={'https://skfb.ly/6JyRB'}
                                codeUrl={null}
                                skills={[ 'Blender', 'UV Unwrapping', 'Texturing' ]}
                                images={[
                                  steelDrum1,
                                  steelDrum2
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SteelDrumBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Tactical Grip'}
                                subtitle={'A Tactical rifle grip created using Blender'}
                                description={'A Tactical rifle grip created using Blender'}
                                body={`Like many of my other models, this tactical rifle grip was also created using Blender. The notch at the top is meant to allow the grip to be attached to the rail system of the weapon to which it will be attached, and the ribbed body of the rubber grip increase the friction of the component, thereby increasing the 'grippiness' of it. Modeled after real world vertical weapon grips.`}
                                demoUrl={'https://skfb.ly/6JyQL'}
                                codeUrl={null}
                                skills={[ 'Blender', '3D Modeling' ]}
                                images={[
                                  tacticalGrip1,
                                  tacticalGrip2
                                ]}
                                color={'orange'}
                                backgroundClass={classes.TacticalGripBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Red Dot Optic'}
                                subtitle={'Red dot optic for short to mid-range rifles'}
                                description={'Red dot optic for short to mid-range rifles'}
                                body={`A basic rifle red dot optic, modeled in Blender after real world counterparts. Contains mounting holes on the side, and a transparent window upon which a 'red dot' is projected to act as the rifle user's crosshair.`}
                                codeUrl={null}
                                demoUrl={'https://skfb.ly/6JyRu'}
                                skills={[ 'Blender', '3D Modeling' ]}
                                images={[
                                  gunOptic1,
                                  gunOptic2
                                ]}
                                color={'green'}
                                backgroundClass={classes.RedDotOpticBg}
                                classes={classes}
                                onPopupMounted={this.onPopupMounted}
                                onPopupOpened={this.onPopupOpened}
                                openPopupBtn={this.state.openPopupBtn}
                                {...this.props}
                              />
                            </Grid>
                          </Grid>
                        </Grid>



                        {/*<Grid item>
                         <ProjectCard
                         title={''}
                         description={''}
                         skills={[
                         '',wd
                         ]}
                         color={''}
                         backgroundClass={classes.breakoutBg}
                         classes={classes}
                         {...this.props}
                         />
                         </Grid>*/}
                      </Grid>
                    </Grid>
                  </Grid>
                </section>

                <section className={scss['section-stories']}>
                  <div className={scss['bg-video']} style={{ height: isWidthDown('md', width, true) ? '100%' : '' }}>
                    {!!bgVideo && isWidthUp('md', width, true) && isWidthDown('xl', width) ? (
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
                    <Grid item xs={12} style={{ width: '100%' }}>
                      <Story
                        name={'Victoria Saucier'}
                        position={'Founder & CEO - Gainfy'}
                        highlight={'Passionate and Value Driven'}
                        testimonial={
                          '(Dalton) brings passionate, value-driven technical skills and analytical abilities to successfully evolve company product strategy.'
                        }
                        panelDirection={panelDirection}
                        portraitSrc={victoriaSaucier}
                        {...this.props}
                      />
                    </Grid>
                    <Grid item xs={12} style={{ width: '100%' }}>
                      <Story
                        name={'Michael Szczech'}
                        position={'Software Engineer - Gainfy'}
                        highlight={'A very knowledgeable and proficient full stack developer'}
                        testimonial={
                          `Working with Dalton has been great! Upon on-boarding (Dalton) to our project, he demonstrated his agility and efficiency in learning our technology stack. Dalton is a very knowledgeable and proficient full stack developer. His easy-going personality makes working with him very smooth and enjoyable. I highly recommend Dalton for all your tech team needs!`
                        }
                        panelDirection={panelDirection}
                        portraitSrc={michaelSzczech}
                        {...this.props}
                      />
                    </Grid>
                    <Grid item>
                      <a href={''} onClick={() => history.push(Const.HrefAbout)} className={scss['btn-text']}>
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
                              href={Const.LinkedIn}
                              target={'_blank'}
                              title={'LinkedIn'}
                              rel={'noreferrer noopener nofollow'}
                              className={scss['footer__nav-link']}>
                              <FaLinkedinIn className={scss.icon} color={'#f7f7f7'} size={'1.3rem'} fill={'#f7f7f7'} />
                            </a>
                          </Grid>
                          <Grid item className={scss['footer__nav-item']}>
                            <a
                              href={Const.Github}
                              target={'_blank'}
                              title={'Github'}
                              rel={'noreferrer noopener nofollow'}
                              className={scss['footer__nav-link']}>
                              <FaGithub className={scss.icon} color={'#f7f7f7'} size={'1.3rem'} fill={'#f7f7f7'} />
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
                                <a href={''} onClick={() => history.push(Const.HrefHome)} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Home
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={''} onClick={() => history.push(Const.HrefContact)} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Contact
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={''} onClick={() => history.push(Const.HrefAbout)} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  About
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={''} onClick={() => history.push(Const.HrefBlog)} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Blog
                                </a>
                              </li>
                            </Grid>
                            <Grid item className={scss['footer__nav-item']}>
                              <li>
                                <a href={Const.CreddleResumeLink} color={'inherit'} font={'inherit'} className={scss['footer__nav-link']}>
                                  Resume
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
                              <a href={''} onClick={() => history.push(Const.HrefContact)} className={scss['footer__nav-link']}>
                                Dalton Pierce
                              </a>{' '}
                              for use on{' '}
                              <a href={''} onClick={() => history.push(Const.HrefHome)} className={scss['footer__nav-link']}>
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
  const { images, title, subtitle, body, codeUrl, demoUrl, width, toggleVisible, detailsVisible, classes, onPopupMounted, openPopupBtn } = props;

  const isSm = isWidthDown('sm', width, true);

  return (
    <Fade in={detailsVisible} timeout={300}>
      <div className={scss.popup} onClick={e => {
        document.getElementById(openPopupBtn)
                .focus();
        toggleVisible(false);
      }}>
        <div className={scss['popup__content']} onClick={e => e.stopPropagation()}>
          <div className={scss['popup__left']}>
            <Grid container direction={'column'} alignContent={'flex-start'} alignItems={'center'} justify={'flex-start'} style={{ height: '100%' }}>
              {
                (images)
                ? images.map((image, index) => (
                  <Grid item key={`${title}-${index}`}>
                    <img
                      alt={`${title} image ${index + 1}`}
                      height={'100%'}
                      src={image}
                      className={scss['popup__img']}
                    />
                  </Grid>
                ))
                : null
              }
            </Grid>
          </div>
          <div className={scss['popup__right']} style={{ paddingTop: '5rem' }}>
            <a id={'close-popup'} ref={onPopupMounted} onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              document.getElementById(openPopupBtn)
                      .focus();
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
                {title || 'Temporary Title'}
              </Typography>
            </div>
            {
              subtitle.includes('<') ? <h4 dangerouslySetInnerHTML={{ __html: subtitle }} />
                                     : <h4 className={classNames(scss['heading-tertiary'], scss['popup__subheading'])}>
                {subtitle}
              </h4>
            }
            <p className={scss['popup__body']} dangerouslySetInnerHTML={{ __html: body }} />
            <Grid container direction={'row'} alignContent={'flex-start'} spacing={32}>
              {
                demoUrl
                ? <Grid item>
                  <a className={classNames(scss['btn'], scss['btn--green'])} rel={'noopener noreferrer nofollow'} target={'_blank'} href={demoUrl}>View Demo</a>
                </Grid>
                : null
              }
              {
                codeUrl
                ? <Grid item>
                  <a className={classNames(scss['btn'], scss['btn--green'])} rel={'noopener noreferrer nofollow'} target={'_blank'} href={codeUrl}>View Code</a>
                </Grid>
                : null
              }
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
                viewBoxSize={icon.viewBoxSize}
                viewBoxOffset={icon.viewBoxOffset}
                svgOptions={icon.svgOptions}
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
  const { title, description, skills, color, backgroundClass, classes, images, subtitle, body, codeUrl, demoUrl, onPopupOpened } = props;

  const [ detailsVisible, toggleDetails ] = React.useState(false);
  const cardRef = null;

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
            images={[ ...images ]}
            title={title}
            subtitle={subtitle}
            body={body}
            codeUrl={codeUrl}
            demoUrl={demoUrl}
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
                onPopupOpened(`${title}-details-btn`);
                toggleDetails(true);
              }} id={`${title}-details-btn`} color={'inherit'} href={'#'} className={classNames(scss.btn, scss['card__cta-btn'])}>
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
    <Grid item xs>
      <Grid container direction={'row'} alignItems={'center'} font={'inherit'} color={'inherit'}>
        <Grid item xs={12} sm={10} md={8} lg={7} xl={6} className={scss['story']}>
          {
            isSmDown
            ? <Grid container direction={'column'} alignItems={'center'} alignContent={'center'} justify={'center'} className={scss['story__content']}>
              <Grid item>
                <Grid container direction={'row'} alignItems={'center'} alignContent={'center'} justify={'center'}>
                  <Grid item>
                    <figure className={scss['story__shape']}>
                      <img src={portraitSrc} alt={name} className={scss['story__portrait']}/>
                      <figcaption className={scss['story__caption']}>
                        <span>{name}</span>
                        <br />
                        <span>{position}</span>
                      </figcaption>
                    </figure>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs className={scss['story__text']}>
                <h3 style={{ textAlign: 'center' }} className={classNames(scss['heading-tertiary'], scss['story__text--highlight'])}>{ highlight }</h3>
                <p className={scss['story__text--testimonial']}>{ testimonial }</p>
              </Grid>
            </Grid>
            : <div className={scss['story__content']}>
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
          }
        </Grid>
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
  backgroundClass: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.shape({}) ])),
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  codeUrl: PropTypes.string,
  demoUrl: PropTypes.string
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  codeUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  width: PropTypes.string.isRequired,
  toggleVisible: PropTypes.func.isRequired,
  detailsVisible: PropTypes.bool.isRequired,
  onPopupMounted: PropTypes.func.isRequired,
  openPopupBtn: PropTypes.string.isRequired
};
Portal.propTypes = {
  children: PropTypes.shape({}),
  target: PropTypes.string.isRequired
};

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
