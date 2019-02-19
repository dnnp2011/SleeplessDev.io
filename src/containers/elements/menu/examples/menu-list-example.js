import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Manager, Popper } from "react-popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


const styles = {
  root: {
    display: "flex"
  },
  popperClose: {
    pointerEvents: "none"
  }
};


class MenuListComposition extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={ classes.root }>
        <Paper>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
        <div>
          <Manager>
            <Button
              aria-owns={ open ? "menu-list" : null }
              aria-haspopup='true'
              onClick={ this.handleClick }
            >Open Menu</Button>
            {/*Fixed the runtime bug by placing the popper children in its children prop and manually passing props through to each child*/ }
            <Popper
              eventsEnabled={ open }
              placement={ "bottom-start" }
              className={ classNames({ [classes.popperClose]: !open }) }
              children={ props => {
                return (
                  <ClickAwayListener props={ props } onClickAway={ this.handleClose }>
                    <Grow props={ props } in={ open } id='menu-list' style={ { transformOrigin: "0 0 0" } }>
                      <Paper props={ props }>
                        <MenuList props={ props } role='menu'>
                          <MenuItem props={ props } onClick={ this.handleClose }>Profile</MenuItem>
                          <MenuItem props={ props } onClick={ this.handleClose }>My account</MenuItem>
                          <MenuItem props={ props } onClick={ this.handleClose }>Logout</MenuItem>
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
        {/*
         //BUG: This Popper code is causing a runtime error upon loading the /elements/menu page - Object(...) is not a function in menu-list-example.js
         <Manager>
         <Button
         aria-owns={open ? 'menu-list' : null}
         aria-haspopup="true"
         onClick={this.handleClick}
         >
         Open Menu
         </Button>
         <Popper
         placement="bottom-start"
         eventsEnabled={open}
         className={classNames({ [classes.popperClose]: !open })}
         >
         <ClickAwayListener onClickAway={this.handleClose}>
         <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
         <Paper>
         <MenuList role="menu">
         <MenuItem onClick={this.handleClose}>Profile</MenuItem>
         <MenuItem onClick={this.handleClose}>My account</MenuItem>
         <MenuItem onClick={this.handleClose}>Logout</MenuItem>
         </MenuList>
         </Paper>
         </Grow>
         </ClickAwayListener>
         </Popper>
         </Manager>*/ }
      </div>
    );
  }
}


MenuListComposition.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(MenuListComposition);