import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import FontAwesome from 'react-fontawesome';

import themeStyles from './content-footer.theme.style';


const ContentFooter = (props) => {
  const { classes, ...other } = props;

  return (
    <AppBar
      color='default'
      position='static'
      {...other}
    >
      <Toolbar>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
        >
          <small>&copy; 2019 SleeplessDev</small>
        </Typography>
        <span className='portal-flex' />
        <IconButton className={classes.iconButton} href={'https://www.linkedin.com/in/dalton-glenn-pierce/'} target={'_blank'} rel={'noopener nofollow noreferrer'}>
          <Icon className={classNames(classes.coloredIcon, 'fa fa-linkedin')} />
        </IconButton>
        <IconButton className={classes.iconButton} href={'https://github.com/dnnp2011/'} target={'_blank'} rel={'noopener nofollow noreferrer'}>
          <Icon className={classNames(classes.coloredIcon, 'fa fa-github')} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

ContentFooter.propTypes = {
  classes: PropTypes.shape({}).isRequired
};


export default withStyles(themeStyles)(ContentFooter);
