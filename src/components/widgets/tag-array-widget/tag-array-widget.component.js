import { Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import TagChip from "../tag-chip-widget/tag-chip-widget.component";
import themeStyles from "./tag-array-widget.theme.style";


const TagArray = (props) => {
  const { classes, tags } = props;
  let { maxWidth } = props;
  maxWidth = !!maxWidth ? maxWidth : "";

  return (
    <Grid container spacing={ 8 } className={ classes.tagList } direction={ "row" } style={ { width: maxWidth } }>
      {
        tags.map((tag, index) => {
          return (
            <Grid item key={ index }>
              <TagChip setTagParam={props.setTagParam} tag={tag} />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

TagArray.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(themeStyles, { withTheme: true })(TagArray);