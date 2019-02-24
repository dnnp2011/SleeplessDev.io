import { Fade, withStyles, withWidth } from "@material-ui/core";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import compose from "recompose/compose";
import SpinnerWidget from "../../../widgets/spinner-widget/spinner-widget.component";
import BlogPaper from "../blog-paper/blog-paper.component";
import themeStyles from "./blog-view.theme.style";


function BlogView(props) {
  const { classes, id } = props;

  const GET_BLOG = gql`
      query getBlogById($id: String!) {
          blogByIdHtml(id: $id) {
              _id, title, author, body, tags, dateCreated, dateEdited
          }
      }
  `;

  //TODO: Implement basic memoization or statefullness to avoid querying the API if the user is viewing a previously cached post
  return (
    <>
      <Query query={ GET_BLOG } variables={ { id } }>
        {
          ({ loading, error, data }) => {
            if (error) new Error(error);
            if (loading || !data) return <SpinnerWidget loadingText={ "Fetching Blog" } />;
            else {
              let response = data.blogByIdHtml;
              if (!response || !Object.keys(response).length) {
                return <Redirect replace to={ "/blog" } />;
              }
              else {
                return (
                  <Fade>
                    <BlogPaper { ...response } />
                  </Fade>
                );
              }
            }
          }
        }
      </Query>
    </>
  );
}


BlogView.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(BlogView);