import { Avatar } from "@material-ui/core";
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
                    classes.ContactDetailsAvatarImg,
                  ) }
                  src={ SelfOutdoors }
                  alt={ "Dalton Pierce" }
                  title={"Om Nom Nom"}
                />
              </div>
              <div
                className={ classNames(
                  scss["contact-details__extra"],
                  classes.ContactDetailsExtra
                ) }
              >
                <Typography component={ "p" } variant={ "subheading" }>{ gender }, Age { age }</Typography>
                <Typography component={ "p" } variant={ "subheading" }>{ region }</Typography>
                {/*<Typography component={ "p" } variant={ "subheading" }>{ phone }</Typography>*/}
                <Typography component={ "p" } variant={ "subheading" } title={"Email Me!"}><a href={`mailto:${email}`} target={"_blank"} rel={"noopener noreferrer"} className={classNames(classes.ContactDetailsContentEmail)}>{ email }</a></Typography>
                {/*<Typography component={ "p" } variant={ "subheading" }>{ birthday }</Typography>*/}
                <br />
                <IconButton href={ "https://www.twitter.com" } title={ "Twitter" } color='inherit' aria-label='twitter link' target={"_blank"} rel={"noopener noreferrer"}>
                  <FaTwitter size={ 15 } name={ "twitter" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "https://www.facebook.com" } title={ "Facebook" } color='inherit' aria-label='facebook link' target={"_blank"} rel={"noopener noreferrer"}>
                  <FaFacebookF size={ 15 } name={ "facebook" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "https://www.linkedin.com" } title={ "LinkedIn" } color='inherit' aria-label='linkedin link' target={"_blank"} rel={"noopener noreferrer"}>
                  <FaLinkedinIn size={ 15 } name={ "linkedin" } className={ classNames(classes.ContactDetailsSocialIcons) } />
                </IconButton>
                <IconButton href={ "http://localhost:3000" } title={ "Website" } color='inherit' aria-label='website link' target={"_blank"} rel={"noopener noreferrer"}>
                  <FaGlobeAmericas size={ 15 } name={ "website" } className={ classNames(classes.ContactDetailsSocialIcons) } />
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
