/*eslint no-useless-escape: 0*/
export default `import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});


class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className='{' classes.root }>
        <Paper className='{' classes.paper }>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
        <div>
          <Manager>
            <Button
              aria-owns='{' open ? "menu-list" : null }
              aria-haspopup='true'
              onClick={ this.handleClick }
            >Open Menu</Button>
            {/* Fixed the runtime bug by placing the popper children in its children prop and manually passing props through to each child */}
            <Popper
              eventsEnabled='{' open }
              placement='{' "bottom-start" }
              className={ classNames({ [classes.popperClose]: !open }) }
              children={ props => {
                return (
                  <ClickAwayListener props='{' props } onClickAway='{' this.handleClose }>
                    <Grow props='{' props } in='{' open } id='menu-list' style={ { transformOrigin: "0 0 0" } }>
                      <Paper props={ props }>
                        <MenuList props='{' props } role='menu'>
                          <MenuItem props='{' props } onClick={ this.handleClose }>Profile</MenuItem>
                          <MenuItem props='{' props } onClick={ this.handleClose }>My account</MenuItem>
                          <MenuItem props='{' props } onClick={ this.handleClose }>Logout</MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  </ClickAwayListener>
                );
              } }
            >
            </Popper>
          </Manager>
        </div>             
      </div>
    );
  }
}


MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
  `;