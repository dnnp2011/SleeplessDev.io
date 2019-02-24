import { Chip, Avatar, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import themeStyles from "./tag-chip-widget.theme.style";


const TagChip = (props) => {
  const { classes, avatarSrc, title, onTagClick } = props;

  let isAvatar = avatarSrc.length > 2;

  return (
    <div>
      <Chip
        avatar={ isAvatar ? <Avatar alt={ title } className={ classes.tagLogo } src={ avatarSrc } /> : <Avatar color={"secondary"} alt={ title } className={classes.tagLogo}>{avatarSrc}</Avatar> }
        label={ title }
        onClick={ onTagClick }
        className={ classes.tagChip }
        variant={ "outlined" }
        color={ "default" }
        clickable
      />
    </div>
  );
};

TagChip.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TagChip);