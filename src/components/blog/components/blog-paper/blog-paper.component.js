import { Grid, Paper, Typography, withStyles, withWidth } from "@material-ui/core";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import TagArray from "../../../widgets/tag-array-widget/tag-array-widget.component";
import themeStyles from "./blog-paper.theme.style";
import { convertTimestampToDate } from "../../../../helpers/Util";


dayjs().format();

function BlogPaper(props) {
  const { classes, width, id, title, author, body, tags, dateCreated, dateEdited } = props;

  //BUG: The blog ID is arriving as a null value
  //TODO: Look into isolating the html converted from Markdown in the body of blog posts to avoid accidentally invoking JS functions from blog content

  return (
    <Grid container direction={ "row" } spacing={ 0 } alignContent={ "center" } justify={ "center" }>
      <Grid item md={ 8 } sm={ 10 } xs={ 12 }>
        <Paper elevation={ 5 } raised={ "true" } className={ classes.paper }>
          <Grid container spacing={ 8 } direction={ "column" } alignItems={ "flex-start" } justify={ "flex-start" }>
            <div className={ classes.header }>
              <Typography variant={ "h2" } gutterBottom>
                { title }
              </Typography>
              <Typography variant={ "subtitle1" }>
                By { author || "Anonymous" }
              </Typography>
              {
                dateEdited
                ? (
                  <div>
                    <Typography variant={ "caption" }>
                      { `Posted ${ convertTimestampToDate(dateCreated) }` }
                    </Typography>
                    <Typography variant={ "caption" }>
                      { `Last edited ${ convertTimestampToDate(dateEdited) }` }
                    </Typography>
                  </div>
                )
                : (
                  <Typography variant={ "caption" }>
                    { dateEdited ? `Last edited ${ convertTimestampToDate(dateEdited) }` : `Posted ${ convertTimestampToDate(dateCreated) }` }
                  </Typography>
                )
              }
            </div>
            <div className={ classes.content }>
              <Typography variant={ "body1" } component={ "p" } dangerouslySetInnerHTML={ { __html: body } } />
            </div>
            <div className={ classes.footer }>
              {
                tags
                ? <TagArray tags={ tags } />
                : null
              }
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}


BlogPaper.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth({ noSSR: true }), withStyles(themeStyles, { withTheme: true }))(BlogPaper);