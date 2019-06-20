import { Divider, Grid, List, ListItem, Typography, withStyles, withWidth } from '@material-ui/core';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { getStringFromMonth } from '../../../../helpers/Util';
import WarningSign from '../../../widgets/warning-sign-widget/warning-sign-widget.component';

import BlogCard from '../blog-card/blog-card.component';
import themeStyles from './blog-overview.theme.style';


function BlogOverview(props) {
  const { classes, setBlogId, month, year, tag } = props;
  let blogData = null, readyToRefresh = true;

  const GET_BLOGS = gql`
      query getBlogsByMonth($month: String, $year: String, $limit: Int) {
          blogsByMonth(blogParams: {month: $month, year: $year, limit: $limit}) {
              _id, title, author, body, description, tags, dateCreated, dateEdited
          }
      }
  `;

  const GET_BLOGS_BY_TAG = gql`
      query getBlogsByTag($tag: [String!]!) {
          blogsByTag(tags: $tag) {
              _id, title, author, body, description, tags, dateCreated, dateEdited
          }
      }
  `;

  return (
    <Grid container direction={'column'} spacing={16} alignContent={'center'} justify={'center'} className={classes.blogCardList}>
      <List className={classes.listItem}>
        <ListItem className={classes.listItem} disableGutters key={0}>
          <Grid container direction={'row'} alignContent={'center'} justify={'center'}>
            <Grid item>
              <Grid container spacing={8} direction={'column'} alignContent={'center'} justify={'center'}>
                <Grid item>
                  <Typography variant={'h6'} component={'h3'} gutterBottom>
                    Blog Overview
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={16} direction={'row'} alignContent={'center'} justify={'space-evenly'}>
                    {month || year || tag ? <Typography variant={'caption'} component={'h6'}>Filters:</Typography> : null}
                    {month ? <Typography variant={'caption'} component={'h6'}>{getStringFromMonth(month)}</Typography> : null}
                    {year ? <Typography variant={'caption'} component={'h6'}>{year}</Typography> : null}
                    {tag ? <Typography variant={'caption'} component={'h6'}>{tag}</Typography> : null}
                  </Grid>
                </Grid>
                <Grid item>
                  <Divider variant={'fullWidth'} color={'primary'} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        {
          !tag
            ? <Query query={GET_BLOGS} fetchPolicy={'cache-and-network'} variables={{
              month,
              year
            }} pollInterval={600000}>
              {
                ({ loading, error, data }) => {
                  if (error) new Error(error);
                  if (loading) return null;
                  else if (!data) return <WarningSign label={'No data received from server'} />;
                  else if (!blogData || readyToRefresh) {
                    return renderBlogs(data.blogsByMonth);
                  }
                }
              }
            </Query>
            : <Query query={GET_BLOGS_BY_TAG} fetchPolicy={'cache-and-network'} variables={{ tag }} pollInterval={600000}>
              {
                ({ loading, error, data }) => {
                  if (error) new Error(error);
                  if (loading) return null;
                  else if (!data) return <WarningSign label={'No data received from server'} />;
                  else if (!blogData || readyToRefresh) {
                    return renderBlogs(data.blogsByTag);
                  }
                }
              }
            </Query>
        }
      </List>
    </Grid>
  );

  function renderBlogs(blogData) {
    if (!!blogData.length) {
      return blogData.map(blog => {
        const { author, body, ...rest } = blog;

        readyToRefresh = false;
        setTimeout(() => {
          readyToRefresh = true;
        }, 590000);
        return (
          <ListItem className={classes.listItem} disableGutters key={blog._id}>
            <BlogCard {...rest} setTagParam={props.setTagParam} setBlogId={setBlogId} />
          </ListItem>
        );
      });
    }
    else return <WarningSign label={'No blogs available within the given parameters'} />;
  }
}


BlogOverview.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  setBlogId: PropTypes.func.isRequired,
  month: PropTypes.string,
  year: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string])
};

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(BlogOverview);