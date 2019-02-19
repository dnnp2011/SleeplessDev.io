/*eslint no-useless-escape: 0*/
export default `import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button size="small" className={classes.button}>
          Small
        </Button>
        <Button size="medium" className={classes.button}>
          Medium
        </Button>
        <Button size="large" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.button}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.button}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Fab mini color="secondary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(ButtonSizes);
`;
