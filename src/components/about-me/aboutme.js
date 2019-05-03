import {
  Avatar, ButtonBase, Card, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Hidden
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth/withWidth';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import compose from 'recompose/compose';

import SelfPortrait from '../../assets/images/portrait/Dalton-Suit-Portrait-02.jpeg';
import WebDevAndCoffee from '../../assets/images/stock/web-dev-and-coffee-1920x1080.jpg';
import scss from './aboutme.module.scss';

import themeStyles from './aboutme.style';


class AboutMe extends React.Component {
  state = {
    expanded: null,
    viewWidth: 0,
    viewHeight: 0
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }


  updateWindowDimensions = () => {
    this.setState({
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight
    });
  };


  render() {
    const resumeUrl = 'https://resume.creddle.io/embed/7wqefr81r5z';
    const { classes, history, width } = this.props;
    const { expanded, viewWidth, viewHeight } = this.state;

    return (
      <Grid
        container
        spacing={0}
        className={classNames(
          scss['about-me-page'],
          classes.background
        )}
        justify={'center'}
        alignItems={'center'}
        style={{ width: '100%' }}
        wrap={'wrap'}
      >
        <Grid
          item
          md={6}
          sm={10}
          xs={12}
          className={scss.panel}
        >
          <Grid
            container
            spacing={32}
            direction={'column'}
            justify={'space-around'}
            wrap={'wrap'}
          >
            <Grid
              item
              xs
              style={{
                paddingTop: '12.5rem',
                zIndex: -1
              }}
            >
              <Grid
                container
                spacing={0}
                direction={'row'}
              >
                <Grid item xs>
                  <div className={scss['about-me__header']}>
                    <Avatar alt='Dalton Pierce' src={SelfPortrait} className={scss['about-me__header-avatar']} />
                  </div>
                </Grid>
                <Grid item xs style={{ zIndex: 2 }}>
                  <Typography variant='h5' gutterBottom>
                    Dalton Pierce
                  </Typography>
                  <Typography variant='subtitle1' gutterBottom>
                    Full Stack Developer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <div className={scss['about-me__content-first']}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid
                      container
                      direction={'row'}
                      justify={'space-between'}
                    >
                      <Grid item xs>
                        <Typography className={scss['about-me__expansion-panel-header']} variant={'h6'}>About Me</Typography>
                      </Grid>
                      <Grid item xs>
                        <Hidden xsDown>
                          <Typography className={scss['about-me__expansion-panel-subheader']} variant={'h6'}>Personal History</Typography>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant={'body1'}>
                      As a child, one of my favorite past-times was building new contraptions with Legos! I would often come home from school and lose myself in building spaceships, cars, and bases
                      out of those colorful little blocks.
                      I was captivated by those feelings of eager curiosity and boundless creativity that Legos instilled. I felt those same emotions stirred during the Intro to Java and Web Design
                      classes that introduced me to
                      programming in high school. Consider the parallels between building with Legos, and developing software with code: Each container of Legos has a certain number of pieces of
                      various shapes, sizes and colors - and,
                      most importantly, a standard method of connecting the individual pieces via interlocking shapes on theirs tops and bottoms. In much the same way, any given programming languages
                      has a certain number of classes,
                      methods and primitive data structures - And of course, the secret sauce that holds it all together: the strict syntax rules that tell the programmer how to fit them all together.
                      It's these properties that enable
                      the creation of constructs that are greater than the sum of their parts.w
                      <br /><br />
                      For me, programming is more than simply a profession. It's an expression of creativity and ingenuity, a method of solving problems, and transforming what at one time existed only
                      in my mind into something tangible and useful. It's that interminable potential that excites and inspires me most about programming and software development, and acts as the
                      kindling that keeps me motivated
                      and optimistic - Because, once again, programming is more than simply my profession, it's my passion.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid
                      container
                      direction={'row'}
                      justify={'space-between'}
                    >
                      <Grid item xs>
                        <Typography className={scss['about-me__expansion-panel-header']} variant={'h6'}>Skills</Typography>
                      </Grid>
                      <Grid item xs>
                        <Hidden xsDown>
                          <Typography className={scss['about-me__expansion-panel-subheader']} variant={'h6'}>Technical Knowledge</Typography>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant={'body1'}>
                      My journey as a developer has led me to learn a diverse array of languages (C#, Javascript, Ruby, Python, Java, etc), frameworks (React, React-Native, Node, Express, etc), and
                      other tools
                      (MongoDB, SQL, GraphQL, JQuery, etc). Learning to use new programming tools and conventions isn't a chore, but rather something I enjoy and look forward to - a characteristic
                      that is invaluable
                      as a developer. But my passion for technology has introduced me to a plethora of software and activities beyond the confines of pure code, such as Networking and Firewalls, Web
                      Hosting, Linux Operating
                      Systems, building PC's and servers, component-level soldering, phone repair, virtualization, game modding, and countless others. I regularly find myself down the rabbit hole of
                      new and interesting projects
                      in which I get to learn something completely new! It's this wide breadth of knowledge and experience that allows me a unique perspective on the problems that I tackle and the
                      projects that I undertake.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>

            {
              viewWidth >= 827
                ? <Grid
                  item
                  xs
                >
                  <div className={scss['portal-profile__content-second']}>
                    <Card className={scss.card}>
                      <iframe title={'Resume Iframe'} src={resumeUrl} ref={frame => this.iframe = frame} className={classNames(scss['about-me__resume-iframe'], scss['card-content'])} seamless scrolling={'no'} />
                    </Card>
                  </div>
                </Grid>
                : null
            }
            <Grid item xs={12} style={{ padding: '1rem' }}>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                href={resumeUrl}
                rel={'noreferrer noopener nofollow'}
                target={'_blank'}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${WebDevAndCoffee})`
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component='span'
                    variant='subtitle1'
                    color='inherit'
                    className={classes.imageTitle}
                  >
                                                    Go to Resume Source
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


AboutMe.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(AboutMe);

