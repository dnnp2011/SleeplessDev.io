import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth/withWidth';
import classNames from 'classnames';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { TiSocialGithub, TiSocialLinkedin } from 'react-icons/ti';
import compose from 'recompose/compose';
import SelfOutdoors from '../../assets/images/portrait/selfie-outdoors-cropped-portrait.png';
import scss from './contact.module.scss';
import themeStyles from './contact.style';
import * as Const from '../../helpers/Const';

dayjs()
.format();

class Contact extends React.PureComponent {

  componentDidMount() {
    document.title = 'Contact | SleeplessDev';
  }


  componentWillUnmount() {
    document.title = 'SleeplessDev';
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(scss['contact-details'])}>
        <div
          className={classNames(
            scss['contact-details__header'],
            classes.ContactDetailsHeader
          )}
        >
        </div>
        <div
          className={
            scss['contact-details__content']
          }
        >

          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={3}>
              <div
                className={classNames(
                  scss['contact-details__avatar-container']
                )}
              >
                <div
                  className={
                    scss['contact-details__avatar']
                  }
                >
                  <img
                    className={classNames(
                      classes.ContactDetailsAvatarImg
                    )}
                    src={SelfOutdoors}
                    alt={'Dalton Pierce'}
                    title={'Dalton Pierce'}
                  />
                </div>
                <div
                  className={
                    scss['contact-details__extra']
                  }
                >
                  <Typography component={'p'} variant={'subtitle1'}>{ Const.Gender }, Age { Const.Age }</Typography>
                  <Typography component={'p'} variant={'subtitle1'}>{ Const.Region }</Typography>
                  <Typography component={'p'} variant={'subtitle1'} title={'Send me an email'}><a href={`mailto:${ Const.Email }`} target={'_blank'} rel={'noopener noreferrer'} className={classNames(classes.ContactDetailsContentEmail)}>{ Const.Email }</a></Typography>
                  <br />
                  <IconButton href={Const.Github} title={'Github'} color='inherit' aria-label='github link' target={'_blank'} rel={'noopener noreferrer nofollow'}>
                    <TiSocialGithub size={24} name={'github'} className={classNames(classes.ContactDetailsSocialIcons)} />
                  </IconButton>
                  <IconButton href={Const.LinkedIn} title={'LinkedIn'} color='inherit' aria-label='linkedin link' target={'_blank'} rel={'noopener noreferrer'
                                                                                                                                                                             + ' nofollow'}>
                    <TiSocialLinkedin size={24} name={'linkedin'} className={classNames(classes.ContactDetailsSocialIcons)} />
                  </IconButton>
                  <IconButton href={'/portfolio'} title={'Portfolio'} color='inherit' aria-label='sleeplessdev link' target={'_blank'} rel={'noopener noreferrer nofollow'}>
                    <FaGlobeAmericas size={19} name={'website'} className={classNames(classes.ContactDetailsSocialIcons)} />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              <div
                className={
                  scss['contact-details__main']
                }
              >
                <Typography variant='h5' gutterBottom>Want to reach out?</Typography>
                <Typography component='p' variant={'body1'}>
                  If your looking to hire me for a project, employment position, or just looking for a fellow developer to collaborate with, please
                  don't hesitate to contact me!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

Contact.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Contact);