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
    expanded : null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
                    expanded : expanded ? panel : false
                  });
  };


  render() {
    const resumeUrl = "https://resume.creddle.io/embed/7wqefr81r5z";
    const { classes, width } = this.props;
    const { expanded } = this.state;

    // Flip container to column on mobile screens.
    const panelDirection = width === "xs" ? "column" : "row";

    return (
      <Grid
        container
        xs={ 12 }
        spacing={ 0 }
        className={ classNames(
          scss["about-me-page"],
          classes.background
        ) }
        justify={ "center" }
        alignItems={ "center" }
        title={ "About-Me Page" }
      >
        <Grid
          item
          sm={ 6 }
          xs={ 12 }
          className={ scss.panel }
          title={ "About-Me Center Panel" }
        >
          <Grid
            container
            spacing={ 32 }
            direction={ "column" }
            justify={ "space-around" }
            title={ "About-Me Panel Column" }
          >
            <Grid
              item
              title={ "About-Me Header Section" }
              style={ { paddingTop : "200px", zIndex : -1 } }
            >
              <Grid
                container
                spacing={ 16 }
                direction={ "row" }
                justify={ "flex-start" }
                alignItems={ "flex-start" }
              >
                <Grid item title={ "Header Avatar" }>
                  <div className={ scss["about-me__header"] }>
                    <Avatar alt='Dalton Pierce' src={ SelfPortrait } className={ scss["about-me__header-avatar"] } />
                  </div>
                </Grid>
                <Grid item title={ "Header Title" }>
                  <Typography variant='h5' gutterBottom>
                    Dalton Pierce
                  </Typography>
                  <Typography variant='subheading' gutterBottom>
                    Full Stack Developer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/*<Grid
              item
              title={ "About-Me Paragraph Section" }
            >
              <div className={ scss["about-me__content-first"] }>
                <Card className={ scss.card }>
                  <CardContent className={ scss["card-content"] }>
                    <Typography gutterBottom variant={ "h5" } component={ "h2" }>A bit about me...</Typography>
                    <Typography component='p'>
                      My interest in technology began as a child; whenever something broke in the house, it came to me to take it apart. I was fascinated by how machines worked, be it fans, microwaves, microscopes;
                      I wanted to know how the pieces came together to create a system greater than the sum of its parts. When I was introduced to the work of computer hardware, it was a natural fit for me, given my interest.
                      The first computer that was completely my own was the one I built when I was 14. I was so proud when the screen lit up with POST codes and BIOS information, that I forgot I never installed an operating
                      system on it!
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Grid>*/}

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

            <Grid
              item
              title={ "About-Me Resume Section" }
            >
              <div className={ scss["portal-profile__content-second"] }>
                <Card className={ scss.card }>
                  <CardContent className={ scss["card-content"] }>
                    <iframe title={ "Creddle Resume Iframe" } src={ resumeUrl } ref={ (frame) => this.iframe = frame } className={ scss["about-me__resume-iframe"] } seamless scrolling={ "no" } />
                  </CardContent>
                </Card>
              </div>
            </Grid>

            <Grid
              item
              title={ "About-Me Footer Section" }
            >
              <div className={ scss["about-me__content-third"] }>

              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      /*<Grid
       container
       direction="row"
       spacing={0}
       justify="center"
       alignItems="center"
       className={classNames(
       scss['portal-profile'],
       classes.background
       )}
       >
       <Grid item sm={10} xs={12} className={scss.panel}>
       <Grid direction='column' container spacing={16}>
       <Grid
       item
       xs={12}
       >
       <Grid
       container
       direction='row'
       spacing={0}
       justify="center"
       alignItems="center"
       >
       <Grid
       item
       xs={12}
       >
       <div className={scss['portal-profile__header']}>
       <Avatar alt="Dalton Pierce" src={SelfPortrait} className={scss['portal-profile__header-avatar']} />
       <div>
       <Typography variant="h5" gutterBottom>
       Dalton Pierce
       </Typography>
       <Typography variant="subheading" gutterBottom>
       Full Stack Developer
       </Typography>
       </div>
       </div>
       </Grid>
       </Grid>
       </Grid>
       <Grid
       item
       xs={8}
       >
       <div className={scss['portal-profile__content']}>
       <Card className={scss.card}>
       <CardContent>
       <Typography gutterBottom variant={"h5"} component={"h2"}>A bit about me...</Typography>
       <Typography component="p">
       My interest in technology began as a child; whenever something broke in the house, it came to me to take it apart. I was fascinated by how machines worked, be it fans, microwaves, microscopes;
       I wanted to know how the pieces came together to create a system greater than the sum of its parts. When I was introduced to the work of computer hardware, it was a natural fit for me, given my interest.
       The first computer that was completely my own was the one I built when I was 14. I was so proud when the screen lit up with POST codes and BIOS information, that I forgot I never installed an operating
       system on it!
       </Typography>
       </CardContent>
       </Card>
       </div>
       </Grid>

       <Grid
       xs={8}
       direction='column'
       item
       spacing={0}
       justify="center"
       alignItems="center"
       >
       <div className={scss['portal-profile__content']}>
       <Card className={scss.card}>
       <CardContent>
       <iframe src={resumeUrl} ref={(frame) => this.iframe = frame} className={scss['about-me__resume-iframe']} seamless />
       </CardContent>
       </Card>
       </div>
       </Grid>

       </Grid>
       </Grid>
       </Grid>*/
    );
  }
}


AboutMe.propTypes = {
  classes : PropTypes.shape({}).isRequired,
  width : PropTypes.string.isRequired
};

export default withStyles(themeStyles, { withTheme : true })(AboutMe);
