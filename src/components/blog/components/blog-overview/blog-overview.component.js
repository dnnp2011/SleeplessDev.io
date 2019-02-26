import { Divider, Grid, List, ListItem, Typography, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component, PureComponent } from "react";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";
import { FaExclamationTriangle } from "react-icons/fa";
import dayjs from "dayjs";
import SpinnerWidget from "../../../widgets/spinner-widget/spinner-widget.component";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { getStringFromMonth } from "../../../../helpers/Util";
import { ApolloConsumer } from "react-apollo";
import WarningSign from "../../../widgets/warning-sign-widget/warning-sign-widget.component";

import BlogCard from "../blog-card/blog-card.component";
import themeStyles from "./blog-overview.theme.style";
import scss from "../../blog.module.scss";


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
    <Grid container direction={ "column" } spacing={ 16 } alignContent={ "center" } justify={ "center" } className={ classes.blogCardList }>
      <List className={ classes.listItem }>
        <ListItem className={ classes.listItem } disableGutters key={ 0 }>
          <Grid container direction={ "row" } alignContent={ "center" } justify={ "center" }>
            <Grid item>
              <Grid container spacing={ 8 } direction={ "column" } alignContent={ "center" } justify={ "center" }>
                <Grid item>
                  <Typography variant={ "h6" } component={ "h3" } gutterBottom>
                    Blog Overview
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container spacing={ 16 } direction={ "row" } alignContent={ "center" } justify={ "space-evenly" }>
                    { month || year || tag ? <Typography variant={ "caption" } component={ "h6" }>Filters:</Typography> : null }
                    { month ? <Typography variant={ "caption" } component={ "h6" }>{ getStringFromMonth(month) }</Typography> : null }
                    { year ? <Typography variant={ "caption" } component={ "h6" }>{ year }</Typography> : null }
                    { tag ? <Typography variant={ "caption" } component={ "h6" }>{ tag }</Typography> : null }
                  </Grid>
                </Grid>
                <Grid item>
                  <Divider variant={ "fullWidth" } color={ "primary" } />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        {
          !tag
          ? <Query query={ GET_BLOGS } variables={ { month, year } } >
            {
              ({ loading, error, data }) => {
                if (error) new Error(error);
                if (loading || !data) return null;
                else if (!blogData || readyToRefresh) {
                  return renderBlogs(data.blogsByMonth);
                }
              }
            }
          </Query>
          : <Query query={ GET_BLOGS_BY_TAG } variables={ {tag} } >
            {
              ({ loading, error, data }) => {
                if (error) new Error(error);
                if (loading || !data) return null;
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
        blog.dateCreated = dayjs.unix(blog.dateCreated / 1000).format("MMM D, YYYY");
        blog.dateEdited = blog.dateEdited ? dayjs.unix(blog.dateEdited / 1000).format("MMM D, YYYY") : null;

        // console.table([["created", "edited"], [blog.dateCreated, blog.dateEdited]]);

        let { author, body, ...rest } = blog;

        setTimeout(() => readyToRefresh = true, 59000);
        return (
          <ListItem className={ classes.listItem } disableGutters key={ blog._id }>
            <BlogCard { ...rest } setBlogId={ setBlogId } />
          </ListItem>
        );
      });
    }
    else return <WarningSign label={"No blogs available within the given parameters"} />;
  }
}


BlogOverview.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(BlogOverview);