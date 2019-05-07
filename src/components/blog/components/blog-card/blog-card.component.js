import { Button, Grid, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import * as PropTypes from 'prop-types';
import React from 'react';
import { FaReadme } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';


import logoImage from '../../../../assets/images/logo-terminal/logo_transparent_terminal.png';
import { convertTimestampToDate } from '../../../../helpers/Util';
import TagArray from '../../../widgets/tag-array-widget/tag-array-widget.component';
import themeStyles from './blog-card.theme.style';


function BlogCard(props) {

  const { classes, width, _id, title, description, tags, dateCreated, dateEdited, setBlogId } = props;


  const getMaxTags = () => {

    let maxTags;
    switch (width) {

      case 'xs':
        maxTags = 1;
        break;
      case 'sm':
        maxTags = 1;
        break;
      case 'md':
        maxTags = 1;
        break;
      case 'lg':
        maxTags = 3;
        break;
      case 'xl':
        maxTags = 5;
        break;
      default:
        maxTags = 1;
        break;

    }
    return maxTags;

  };

  const handleClickBlog = id => {

    props.history.push(`/blog/${id}`);
    setBlogId(id);

  };

  return (
    <Grid container direction={'row'} alignContent={'center'} justify={'center'}>
      <Grid item xs={12} sm={10} md={8}>
        <Card className={classes.card} elevation={3} raised={true}>
          <Grid container direction={'row'} spacing={0} alignContent={'flex-start'} alignItems={'center'} justify={'flex-start'}>
            <Grid item xs={2}>
              <CardMedia>
                <img
                  src={logoImage}
                  alt={'Blog Image'}
                  className={classes.image}
                />
              </CardMedia>
            </Grid>
            <Grid item xs={10} className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component='h4' variant='h4'>
                  {title}
                </Typography>
                <Typography variant='caption' color='textSecondary' gutterBottom>
                  {!!dateEdited ? `Edited ${convertTimestampToDate(dateEdited)}` : `Posted ${convertTimestampToDate(dateCreated)}`}
                </Typography>
                <Typography variant={'body1'}>
                  {description ? description : 'No description provided'}
                </ Typography>
              </CardContent>
              <Grid container direction={'row'} spacing={0} alignContent={'space-between'} justify={'space-between'}>
                <Grid item className={classes.tagGrid}>
                  <TagArray setTagParam={props.setTagParam} tags={tags.slice(0, getMaxTags())} />
                </Grid>
                <Grid item>
                  <Button onClick={() => handleClickBlog(_id)} aria-label={'continue reading'} color={'primary'} type={'button'} variant={'outlined'} className={classes.continueBtn}>
                    <Grid container spacing={16} direction={'row'} alignContent={'center'} justify={'center'}>
                      <Grid item>
                        <Typography>
                          Continue reading
                        </Typography>
                      </Grid>
                      <Grid item>
                        <FaReadme color={'secondary'} size={20} />
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );

}


BlogCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  width: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  dateCreated: PropTypes.string.isRequired,
  dateEdited: PropTypes.string,
  setBlogId: PropTypes.func.isRequired
};

export default compose(withWidth({ noSSR: true }), withStyles(themeStyles, { withTheme: true }))(withRouter(BlogCard));