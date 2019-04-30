import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth/withWidth";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import compose from "recompose/compose";
import SelfOutdoors from "../../assets/images/portrait/selfie-outdoors-cropped-portrait.png";
import scss from "./contact.module.scss";

import themeStyles from "./contact.style";


const Contact = (props) => {
  const gender = "Male", age = "25", region = "New York City, NY", email = "daltonpierce@sleeplessdev.io";

  const {
    classes,
    width
  } = props;

  return (
    <div className={ classNames(scss["contact-details"]) }>
      <div
        className={ classNames(
          scss["contact-details__header"],
          classes.ContactDetailsHeader
        ) }
      >
      </div>
      <div
        className={ classNames(
          scss["contact-details__content"],
          classes.ContactDetailsContent
        ) }
      >

        <Grid container spacing={ 0 }>
          <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
            <div
              className={ classNames(
                scss["contact-details__avatar-container"]
              ) }
            >
              <div
                className={ classNames(
                  scss["contact-details__avatar"],
                  classes.ContactDetailsAvatar
                ) }
              >
                <img
                  className={ classNames(
                    classes.ContactDetailsAvatarImg
                  ) }
                  src={ SelfOutdoors }
                  alt={ "Dalton Pierce" }
                  title={ "Dalton Pierce" }
                />
              </div>
              <div
                className={ classNames(
                  scss["contact-details__extra"],
                  classes.ContactDetailsExtra
                ) }
              >
                <Typography component={ "p" } variant={ "subtitle1" }>{ gender }, Age { age }</Typography>
                <Typography component={ "p" } variant={ "subtitle1" }>{ region }</Typography>
                {/*<Typography component={ "p" } variant={ "subtitle1" }>{ phone }</Typography>*/ }
                <Typography component={ "p" } variant={ "subtitle1" } title={ "Email Me!" }><a href={ `mailto:${ email }` } target={ "_blank" } rel={ "noopener noreferrer" } className={ classNames(classes.ContactDetailsContentEmail) }>{ email }</a></Typography>
                {/*<Typography component={ "p" } variant={ "subtitle1" }>{ birthday }</Typography>*/ }
                <br />
                <IconButton href={ "https://github.com/dnnp2011" } title={'Github'} color='inherit' aria-label='github link' target={ "_blank" } rel={ "noopener noreferrer nofollow" }>
                  <TiSocialGithub size={ 24 } name={ "github" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "https://www.linkedin.com/in/dalton-glenn-pierce/" } title={'LinkedIn'} color='inherit' aria-label='linkedin link' target={ "_blank" } rel={ "noopener noreferrer"
                                                                                                                                                                        + " nofollow" }>
                  <TiSocialLinkedin size={ 24 } name={ "linkedin" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "/portfolio" } title={'Portfolio'} color='inherit' aria-label='sleeplessdev link' target={ "_blank" } rel={ "noopener noreferrer nofollow" }>
                  <FaGlobeAmericas size={ 19 } name={ "website" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 9 }>
            <div
              className={ classNames(
                scss["contact-details__main"]
              ) }
            >
              <Typography variant='h5' gutterBottom>Want to reach out?</Typography>
              <Typography component='p' variant={ "body1" }>
                If your looking to hire me for a project, employment position, or just looking for a fellow developer to collaborate with, please
                don't hesitate to contact me!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Contact);