import { Chip, Avatar, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import themeStyles from "./tag-chip-widget.theme.style";


const TagChip = (props) => {
  const { classes, avatarSrc, title, onTagClick } = props;

  return (
    <div>
      <Chip
        avatar={ <Avatar alt={ title } className={ classes.tagLogo } src={ avatarSrc }></Avatar> }
        label={ title }
        onClick={ onTagClick }
        className={ classes.tagChip }
        variant={ "outlined" }
        clickable
      />
    </div>
  );
};

TagChip.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TagChip);