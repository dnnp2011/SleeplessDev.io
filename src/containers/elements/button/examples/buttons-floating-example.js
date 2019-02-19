import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Fab>
      <Fab disabled aria-label="delete" className={classes.button}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(FloatingActionButtons);
