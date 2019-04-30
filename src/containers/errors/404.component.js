import React from 'react';
import PropTypes from 'prop-types';
import {Router} from 'react-router-dom';
import {Card, Grid, Button, CardActions, CardContent, Typography, Input} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import themeStyles from './404.theme.style';
import scss from './404.module.scss';

const Error404 = props => {
  const { classes, history } = props;

  return (
    <div className={classes.background}>
      <Card className={scss.card} raised>
        <CardContent className={scss['card-content']}>
          <Typography variant={'h5'} component={'h2'} gutterBottom>
            Page Not Found
          </Typography>
          <Typography className={scss['card-text']}>
            Sorry the page you were looking for could not be found.
          </Typography>
          {/*<Input
            className={scss['card-search-input']}
            placeholder="Search Portal"
            endAdornment={<SearchIcon />}
          />*/}
        </CardContent>
        <CardActions className={scss['card-actions']}>
          <Grid container direction={'row'} alignContent={'center'} alignItems={'center'} justify={'space-between'}>
            <Grid item xs>
              <Button onClick={() => history.push('/')}>Go Home</Button>
            </Grid>
            <Grid item xs style={{ textAlign: 'end' }}>
              <Button onClick={() => history.push('/portfolio')}>Go to Portfolio</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};


Error404.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Error404);
