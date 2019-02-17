import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import SelfPortrait from "../../assets/images/portrait/Dalton-Suit-Portrait-02.jpeg";
import scss from "./aboutme.module.scss";

import themeStyles from "./aboutme.style";


class AboutMe extends React.Component {
  state = {
    expanded : null,
    width: 0,
    height: 0,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
                    expanded : expanded ? panel : false
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
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  };


  render() {
    const resumeUrl = "https://resume.creddle.io/embed/7wqefr81r5z";
    const { classes, history } = this.props;
    const { expanded, width, height } = this.state;

    return (
      <Grid
        container
        spacing={ 0 }
        className={ classNames(
          scss["about-me-page"],
          classes.background
        ) }
        justify={ "center" }
        alignItems={ "center" }
      >
        <Grid
          item
          sm={ 6 }
          xs={ 12 }
          className={ scss.panel }
        >
          <Grid
            container
            spacing={ 32 }
            direction={ "column" }
            justify={ "space-around" }
          >
            <Grid
              item
              style={ { paddingTop : "200px", zIndex : -1 } }
            >
              <Grid
                container
                spacing={ 16 }
                direction={ "row" }
                justify={ "flex-start" }
                alignItems={ "flex-start" }
              >
                <Grid item>
                  <div className={ scss["about-me__header"] }>
                    <Avatar alt='Dalton Pierce' src={ SelfPortrait } className={ scss["about-me__header-avatar"] } />
                  </div>
                </Grid>
                <Grid item style={ { zIndex: 2 } }>
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
              <div className={ scss["about-me__content-first"] }>
                <ExpansionPanel expanded={ expanded === "panel1" } onChange={ this.handleChange("panel1") }>
                  <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Grid
                      container
                      direction={ "row" }
                      spacing={ 40 }
                      justify={ "space-between" }
                    >
                      <Grid item>
                        <Typography className={scss["about-me__expansion-panel-header"]} variant={ "h6" }>A bit about me</Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={scss["about-me__expansion-panel-subheader"]} variant={ "h6" }>I don't byte</Typography>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant={ "body1" }>
                      My interest in technology began as a child; whenever something broke in the house, it came to me to take it apart. I was fascinated by how machines worked, be it fans, microwaves, microscopes;
                      I wanted to know how the pieces came together to create a system greater than the sum of its parts. When I was introduced to the work of computer hardware, it was a natural fit for me, given my interest.
                      The first computer that was completely my own was the one I built when I was 14. I was so proud when the screen lit up with POST codes and BIOS information, that I forgot I never installed an operating
                      system on it!
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={ expanded === "panel2" } onChange={ this.handleChange("panel2") }>
                  <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Grid
                      container
                      direction={ "row" }
                      spacing={ 40 }
                      justify={ "space-between" }
                    >
                      <Grid item>
                        <Typography className={scss["about-me__expansion-panel-header"]} variant={ "h6" }>Beyond the basics</Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={scss["about-me__expansion-panel-subheader"]} variant={ "h6" }>A bitwise operator</Typography>
                      </Grid>
                    </Grid>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant={ "body1" }>
                      Although I'm primarily a programmer, my knowledge and passion for technology extends far beyond just software. I'm also well versed in the 7 layers of networking - from
                      physical connectivity between devices, to TCP/IP and other transport protocols, as well as HTTP requests at the application layer. I've worked with a number of network-centric
                      technologies such as Network Attached Storage, Web Hosting, Firewalls and general Cyber-Security, FTP, SMB and NFS. I have years of experience building and maintaining
                      electronic hardware for desktops, laptops, mobile devices, servers, and networking equipment. And finally, I familiar with component-level board repair, which includes soldering,
                      circuit board design, troubleshooting, and an understanding of electrical engineering.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </Grid>

            {
              width >= 827 ?
              <Grid
                item
              >
                <div className={ scss["portal-profile__content-second"] }>
                  <Card className={ scss.card }>
                    <iframe src={ resumeUrl } ref={ (frame) => this.iframe = frame } className={ classNames(scss["about-me__resume-iframe"], scss["card-content"]) } seamless scrolling={ "no" } />
                  </Card>
                </div>
              </Grid>
              : null
            }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


AboutMe.propTypes = {
  classes : PropTypes.shape({}).isRequired,
};

export default withStyles(themeStyles, { withTheme : true })(AboutMe);
