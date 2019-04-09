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
import devStock2 from '../../assets/images/stock/web-dev-stock-3-800x533.jpg';
import devStock3 from '../../assets/images/stock/web-dev-stock-4-800x533.jpg';
import devStock1 from '../../assets/images/stock/web-dev-stock-800x533.jpg';
import storyBgVideo from '../../assets/video/falling_sparks_water.mp4';
import storyBgVideoAlt from '../../assets/video/mt_baker.webm';
import storyBgVideoAlt2 from '../../assets/video/snow_motion.ogv';
import * as devicons from '../widgets/svg-icon/Devicons';
import SvgIcon from '../widgets/svg-icon/SvgIcon';
import ParticleSystemCanvas from './components/particle-system-canvas/particle-system-widget.component';
import scss from './projects.module.scss';
import themeStyles from './projects.style';


const hrefHome = '/',
  hrefContact = '/contact',
  hrefAbout = '/about-me',
  hrefBlog = '/blog',
  hrefResume = 'https://resume.creddle.io/resume/7wqefr81r5z',
  hrefLinkedin = 'https://www.linkedin.com/in/dalton-glenn-pierce/',
  hrefGithub = 'https://github.com/dnnp2011/';


class Projects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bgVideo: null,
      navVisible: false
    };

    this.softwareLabel = React.createRef();
    this.designLabel = React.createRef();
  }

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


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.width !== nextProps.width || this.state !== nextState;
  }


  //BUG: Fix the preloading page elements with no styling bug
  //TODO: Add any remaining media queries as needed

  render() {
    const { classes, width } = this.props;
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
        devicons.Ruby.plain,
      ],
      frontend: [
        devicons.React.plain,
        devicons.Firebase.wordmarked,
        devicons.Jquery.plain,
        devicons.Bootstrap.plain,
        devicons.Sass.plain,
        devicons.Pug.plain,
        devicons.MaterialUi.plain,
        devicons.PassportJS.plain,
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
        devicons.Ubuntu.plain,
      ],
      mobile: [
        devicons.Android.plain,
        devicons.ReactNative.plain,
      ],
      'game dev': [
        devicons.Unity.plain,
        devicons.Xna.plain,
        devicons.Blender.plain,
        devicons.Maya.plain,
        devicons.Audacity.plain,
      ],
      tools: [
        devicons.Git.plain,
        devicons.PfSense.plain,
        devicons.OpenVpn.plain,
        devicons.FreeNas.plain,
        devicons.XenServer.plain,
        devicons.Ssh.plain,
        devicons.ChromeDevTools.plain,
        devicons.AmazonWebServices.plain,
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

    // window.addEventListener('scroll', (e) => {
    //   document.getElementById('software-label').scrollTop +=10;
    // });

    return (
      <div id={'project-root'} className={scss.projectRoot}>
        <div className={scss.navigation}>
          <input checked={navVisible} onChange={()=>{}} className={scss['navigation__checkbox']} type={'checkbox'} id={'nav-toggle'} />
          <label htmlFor={'#nav-toggle'} onClick={this.toggleNav}  className={scss['navigation__button']}>
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
                {/*<ParticleSystemCanvas
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
                 />*/}
                {/* TODO: Work on responsive canvas animation */}
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
                                  My name is Dalton Pierce, I'm the developer behind SleeplesDev. When I set my mind to something, I dive in head first and dedicate
                                  myself to achieving my goals. It's that perseverance and willingness to learn new things that has helped me to become the self-taught
                                  myself to achieving my goals. It's that perseverance and willingness to learn new things that has helped me to become the self-taught
                                  developer that I am. Programming and technology is just about a job for me, it's what I live and breath; It's what I'm passionate about.
                                  That passion means that putting my skills to use, or adding new development tools to my toolbox isn't a chore, but is instead a fun -
                                  albeit challenging - problem solving exercise.
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
                                  Node, Express, MongoDB, MySQL; As well as experience working with a team such as my work done at Gainfy on the Gainfy STO and GainFit
                                  projects, and working with a team of developers at Citdex on the Ares project. I gained a wealth of knowledge during these projects
                                  about how to coordinate work across a team, how to deal with code conflicts, how to use external tools to facilitate
                                  bug fixes and work assignments, and how to stick to the roadmap and maintain deadlines while not creating and stressful environment and
                                  allowing for creative freedom.
                                  <br /><br/>
                                  Beyond this programming-specific knowledge, my interest in technology as a whole has introduced me to many other interesting
                                  fields, such as networking and firewalls, using Linux servers and navigating the command line, creating and utilizing
                                  virtual machines, building and maintaining PC and server hardware, component-level soldering, managing network attached
                                  resources (web servers, Domain Name System servers, Virtual Private Network tunnels, network security devices, routers, and
                                  switches), as well as an understanding of cyber security vulnerabilities and defenses.
                                </Typography>
                              </Grid>
                              <Grid item>
                                <a href={hrefAbout} className={scss['btn-text']}>
                                  Go to resume &rarr;
                                </a>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item sm={12} md>
                          {/* TODO: Replace the placeholder composition images with assorted Project screenshots */}
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
                        spacing={32}
                        direction={'column'}
                        alignContent={'center'}
                        alignItems={'center'}
                      >
                        {/* TODO: Fill in with remaining projects, provide valid links to demo/code, replace background images with screenshots */}
                        <Grid item className={scss['section-container']}>
                          <div className={scss['projects__software']}>
                            <h4 className={scss['projects__software--label']} id={'software-label'} ref={this.softwareLabel}>
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
                                description={'The web presence of Gainfy\'s Security Token Offering'}
                                skills={[
                                  'Javascript', 'PHP', 'SQL', '2FA Implementation', 'HTML', 'CSS', 'Linux Server', 'AWS'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.GainfyBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Ares Project'}
                                description={'A blockchain ICO / STO administration tool for Citdex and the OrchardBlock Accelerator'}
                                skills={[
                                  'React', 'Javascript', 'Nodejs', 'Firebase / Firestore', 'Leadership', 'Project Management'
                                ]}
                                color={'green'}
                                backgroundClass={classes.AresBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'SleeplessDev Website'}
                                description={'The culmination of all my development knowledge to create my personal website with my portfolio, blog, and some helpful tools'}
                                skills={[
                                  'React', 'Nodejs', 'MongoDB', 'GraphQL', 'Pug', 'Bootstrap', 'Material-UI', 'Microservices', 'Web Hosting'
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SleeplessDevBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Zombie Shooter'}
                                description={`A wave-based zombie shooter built in Unity. Includes a solid foundation for player and AI animations, tools to speed up adding additional weapons, and performance optimization through object pooling`}
                                skills={[
                                  'C#',
                                  'Unity3D',
                                  'Developer Tooling',
                                  'AI Programming',
                                  '3D Modeling',
                                  'Animation',
                                ]}
                                color={'orange'}
                                backgroundClass={classes.ZombieShooterBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Space Invaders'}
                                description={'A remake of the classic arcade game of the same name, creating in C# and Microsoft\'s XNA Framework'}
                                skills={[
                                  'C#', 'XNA Framework', 'Game Design', 'Spritesheet Animation', 'Sound Design'
                                ]}
                                color={'green'}
                                backgroundClass={classes.SpaceInvaderBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Poshcalc'}
                                skills={[ 'Java', 'Native Android Development', 'XML', 'MVC Architecture', 'Launching Applications' ]}
                                color={'blue'}
                                backgroundClass={classes.PoshCalcBg}
                                classes={classes}
                                {...this.props}
                              >
                                A native Android application to help online reseller price their goods with the ideal <abbr title='Return On Investment'>ROI</abbr>
                              </ProjectCard>
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Sleepless Radio'}
                                description={'A native Android music player with some catchy chiptunes'}
                                skills={[
                                  'Java', 'Native Android Development', 'XML', 'MVC Architecture', 'Recycler Views', 'Media Management'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SleeplessRadioBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'CoolCalc'}
                                description={'An Android calculator app that... calculates!'}
                                skills={[
                                  'Java', 'XML', 'Native Android Development', 'Constraint Layouts', 'Input History'
                                ]}
                                color={'green'}
                                backgroundClass={classes.CoolCalcBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Breakout'}
                                description={'A C# remake of the 70\'s arcade game: Breakout, using Microsoft\'s XNA Framework'}
                                skills={[
                                  'C#', 'XNA Framework', 'Game Design', 'Animation', 'Sound Design'
                                ]}
                                color={'blue'}
                                backgroundClass={classes.BreakoutBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Rock Dodger'}
                                description={'A web-based fixed shooter made solely with Javascript, the goal is to stay alive as long as possible'}
                                skills={[
                                  'Javascript', 'Game Design', 'Web Animations'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.RockDodgerBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Blackjack'}
                                description={'A full C# Blackjack card game, played in the command line and complete with ASCII card faces'}
                                skills={[
                                  'C#', 'Standard IO', 'Game Design', 'OOP'
                                ]}
                                color={'green'}
                                backgroundClass={classes.BlackjackBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Ruby-Tac-Toe'}
                                description={'A command line game of Tic-Tac-Toe you can play with a friend, built in the Ruby programming language'}
                                skills={[
                                  'Ruby', 'Game Design', 'State Management'
                                ]}
                                color={'blue'}
                                backgroundClass={classes.TicTacToeBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Survival Shooter'}
                                description={'A quirky survival shooter in which the player fights off waves of unique enemies for as long as possible'}
                                skills={[
                                  'Unity3D', 'C#', 'AI Programming', 'Animation', 'Sound Design'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SurvivalShooterBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Space Shooter'}
                                description={'A scrolling shooter set in space in which the player must avoid or destroy a constant barrage of enemies and asteroids'}
                                skills={[
                                  'C#', 'Unity3D', 'Game Design', 'Sound Design', 'AI Programming'
                                ]}
                                color={'green'}
                                backgroundClass={classes.SpaceShooterBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'TANKS!'}
                                description={'A round-based tank vs tank battle you can play with a friend on the same PC'}
                                skills={[
                                  'Unity3D', 'C#', 'Animation', 'Sound Design', 'State Management'
                                ]}
                                color={'blue'}
                                backgroundClass={classes.TanksBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Hero Me'}
                                description={'A linear Android application in which the user selects various superhuman qualities to design their own version of their favorite superheros'}
                                skills={[
                                  'Java', 'XML', 'Native Android Development', 'UI Design'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.HeroMeBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        <hr className={scss['horizontal-rule']} />

                        <Grid item className={scss['section-container']}>
                          <div className={scss['projects__design']}>
                            <h4 className={scss['projects__design--label']} id={'software-label'} ref={this.designLabel}>
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
                                description={'A 3D scene containing several custom made models and effects to create this relaxing creek-side view'}
                                skills={[
                                  'Blender', 'UV Unwrapping', 'Texturing', '3D Modeling'
                                ]}
                                color={'green'}
                                backgroundClass={classes.CreekBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Terra and Luna'}
                                description={'A 3D render of Earth and the Moon with custom shaders'}
                                skills={[
                                  'Blender', 'Shader Programming', 'UV Unwrapping', 'Texturing', '3D Modeling'
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SpaceBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                             <Grid item>
                              <ProjectCard
                                title={'Space Ship'}
                                description={'3D model of a 1-seater short range space craft built in Autodesk\'s Maya'}
                                skills={[
                                  'Maya',
                                  'Scene Animation',
                                  'UV Unwrapping',
                                  'Texturing',
                                  '3D Modeling'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.SpaceShipBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Cargo Container'}
                                description={'3D model of a standard cargo shipping container, built in Blender and textured in Substance Painter'}
                                skills={[
                                  'Blender', 'Substance Painter', 'UV Unwrapping', 'Texturing', '3D Modeling'
                                ]}
                                color={'green'}
                                backgroundClass={classes.CargoContainerBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Steel Barrel'}
                                description={'3D model of a simple - yet elegant, steel drum'}
                                skills={[
                                  'Blender', 'UV Unwrapping', 'Texturing'
                                ]}
                                color={'blue'}
                                backgroundClass={classes.SteelDrumBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Tactical Grip'}
                                description={'A tactical grip for a 5.56mm rifle'}
                                skills={[
                                  'Blender', '3D Modeling'
                                ]}
                                color={'orange'}
                                backgroundClass={classes.TacticalGripBg}
                                classes={classes}
                                {...this.props}
                              />
                            </Grid>
                            <Grid item>
                              <ProjectCard
                                title={'Red Dot Optic'}
                                description={'Red dot optic for short to mid-range rifles'}
                                skills={[
                                  'Blender', '3D Modeling'
                                ]}
                                color={'green'}
                                backgroundClass={classes.RedDotOpticBg}
                                classes={classes}
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

                {/* TODO: Implement responsive collapse to column for portrait and text when below SM/XS breakpoint */}
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
                    {/* TODO: Get real quote from Mike, add additional quotes if possible */}
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

  //TODO: Replace popup images with Project relevant screenshots
  //TODO: Provide an alternative display image when screen width is XS
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
              {body || ''}
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
Portal.propTypes = {
  children: PropTypes.shape({}),
  target: PropTypes.string.isRequired
};

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Projects);
