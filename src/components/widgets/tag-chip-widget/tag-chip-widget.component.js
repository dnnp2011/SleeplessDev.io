import { Chip, Avatar, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import themeStyles from "./tag-chip-widget.theme.style";
import { getAcronym } from '../../../helpers/Util';


const TagChip = (props) => {
  const { classes, tag, title, onTagClick } = props;

  return (
    <div>
      <Chip
        avatar={ <Avatar color={"secondary"} alt={ title } className={classes.tagLogo}>{getAcronym(tag)}</Avatar> }
        label={ tag }
        onClick={ onTagClick }
        className={ classes.tagChip }
        variant={ "outlined" }
        color={ "default" }
        clickable
      />
    </div>
  );
};

function styleTagTitle(tag) {

}

function styleTagLabel(tag) {
  return tag.charAt(0).toUpperCase();
}

TagChip.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TagChip);