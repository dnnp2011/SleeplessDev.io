import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { FaFacebookF, FaGlobeAmericas, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SelfOutdoors from "../../assets/images/portrait/selfie-outdoors-cropped-portrait.png";
import scss from "./contact.module.scss";

import themeStyles from "./contact.style";


const Contact = (props) => {
  const gender = "Male", age = "25", region = "New York City, NY", phone = "(904) 955-6408", email = "daltonpierce@sleeplessdev.io", birthday = "06/09/1993";

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
                />
              </div>
              <div
                className={ classNames(
                  scss["contact-details__extra"],
                  classes.portalContactDetailsExtra
                ) }
              >
                <Typography component={ "p" } variant={ "subheading" }>{ gender }, Age { age }</Typography>
                <Typography component={ "p" } variant={ "subheading" }>{ region }</Typography>
                {/*<Typography component={ "p" } variant={ "subheading" }>{ phone }</Typography>*/}
                <Typography component={ "p" } variant={ "subheading" }><a href={`mailto:${email}`} className={classNames(scss["contact-details__email"])}>{ email }</a></Typography>
                {/*<Typography component={ "p" } variant={ "subheading" }>{ birthday }</Typography>*/}
                <br />
                <IconButton href={ "https://www.twitter.com" } color='inherit' aria-label='twitter link'>
                  <FaTwitter size={ 15 } name={ "twitter" } title={ "Twitter" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "https://www.facebook.com" } color='inherit' aria-label='facebook link'>
                  <FaFacebookF size={ 15 } name={ "facebook" } title={ "Facebook" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "https://www.linkedin.com" } color='inherit' aria-label='linkedin link'>
                  <FaLinkedinIn size={ 15 } name={ "linkedin" } title={ "LinkedIn" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "http://localhost:3000" } color='inherit' aria-label='website link'>
                  <FaGlobeAmericas size={ 15 } name={ "website" } title={ "Website" } className={ classNames(classes.ContactDetailsSocialIcons) } />
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
              <Typography variant='headline' gutterBottom>Want to reach out?</Typography>
              <Typography component='p' variant={"body1"}>
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
  classes : PropTypes.shape({}).isRequired,
  width : PropTypes.string.isRequired
};

export default withStyles(themeStyles, { withTheme : true })(Contact);
