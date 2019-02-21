import { Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import TagChip from "../tag-chip-widget/tag-chip-widget.component";
import themeStyles from "./tag-array-widget.theme.style";


const TagArray = (props) => {
  const { classes, tagItems } = props;
  let { maxWidth } = props;
  maxWidth = !!maxWidth ? maxWidth : "";

  return (
    <Grid container spacing={ 8 } className={ classes.tagList } direction={ "row" } style={ { width: maxWidth } }>
      {
        tagItems.map((tagItem, index) => {
          return (
            <Grid item key={ index }>
              <TagChip { ...tagItem } />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

TagArray.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TagArray);