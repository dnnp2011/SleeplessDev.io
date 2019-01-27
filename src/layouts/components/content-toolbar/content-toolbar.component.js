import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withTheme from "@material-ui/core/styles/withTheme";
import Switch from "@material-ui/core/Switch";
import AuthUserContext from "../../../auth/AuthUserContext"
import {auth} from "../../../firebase";
// Material components
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import AppsIcon from "@material-ui/icons/Apps";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import { IoMdLogOut } from "react-icons/io";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";
// Actions
import { toggleNotifications, toggleSidenav, updateLayout } from "../../../actions/layout.actions";
import { changeTheme, changeThemeDirection } from "../../../actions/theme.actions";
// Menu Items
import { menuItems, hiddenMenuItems } from "../../../config";
// Themes
import themes from "../../../themes";


function setTitle(items, currentPath) {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].href && items[i].href === currentPath) {
      return items[i].title;
    }

    if (items[i].children) {
      const result = setTitle(items[i].children, currentPath);
      if (result) {
        return result;
      }
    }
  }
  return null;
}


class ContentToolbar extends React.Component {
  state = {
    layoutMenuEl : null,
    layoutMenuOpen : false,
    themeMenuEl : null,
    themeMenuOpen : false
  };

  handleOpenLayoutClick = (event) => {
    this.setState({ layoutMenuEl : event.currentTarget, layoutMenuOpen : true });
  };

  handleSelectLayoutClick = (event, layout) => {
    this.props.updateLayout(layout);
    this.setState({ layoutMenuEl : null, layoutMenuOpen : false });
  };

  handleCloseLayoutClick = () => {
    this.setState({ layoutMenuEl : null, layoutMenuOpen : false });
  };

  handleOpenThemeClick = (event) => {
    this.setState({ themeMenuEl : event.currentTarget, themeMenuOpen : true });
  };

  handleSelectThemeClick = (event, selectedTheme) => {
    this.props.changeTheme(selectedTheme.theme);
    this.setState({ themeMenuEl : null, themeMenuOpen : false });
  };

  handleCloseThemeClick = () => {
    this.setState({ themeMenuEl : null, themeMenuOpen : false });
  };

  handleDirectionChange = (event, checked) => {
    this.props.changeThemeDirection({
                                      direction : checked === true ? "rtl" : "ltr"
                                    });
    this.setState({ themeMenuEl : null, themeMenuOpen : false });
  };

  handleAdminLoginClick = (authUser) => {
    this.props.history.push("/admin/login");
    /*(authUser
     ? (
       this.props.history.push('/admin/dashboard')
     )
     : (
       this.props.history.push('/admin/login')
     ))*/
  };

  handleAdminLogoffClick = (authUser) => {
    // auth.doSignOut();
    const { history } = this.props;
    authUser ? history.push('/admin/dashboard') : history.push('/admin/login');
{/*    <AuthUserContext.Consumer>
      {
        authUser =>
          (!authUser ?
            // Logout successful, route to non-auth login
          history.push('/')
                    :
            // Lout NOT successful, do nothing, or give error message
          alert("Logout could not be correctly processed"))
      }
    </AuthUserContext.Consumer>*/}
  };


  render() {
    const {
      width,
      layout,
      location,
      theme
    } = this.props;

    const showBurgerMenu = isWidthDown("sm", width) || !layout.sidenavOpen;

    return (
      <AuthUserContext.Consumer>
        { authUser =>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open sidenav'
              style={ { display : showBurgerMenu ? "block" : "none" } }
              onClick={ this.props.toggleSidenav }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color='inherit' noWrap>
              { setTitle(menuItems.concat(hiddenMenuItems), location.pathname) || "Route Not Found" }
            </Typography>
            <span className='portal-flex' />
            <IconButton
              color='inherit'
              aria-label='change theme'
              onClick={ this.handleOpenThemeClick }
            >
              <InvertColorsIcon />
            </IconButton>
            <Menu
              id='theme-menu'
              anchorEl={ this.state.themeMenuEl }
              open={ this.state.themeMenuOpen }
              onClose={ this.handleCloseThemeClick }
            >
              { themes.map(themeOption => (
                <MenuItem key={ themeOption.id } onClick={ event => this.handleSelectThemeClick(event, themeOption) }>
                  { themeOption.name }
                </MenuItem>
              )) }
            </Menu>

            <IconButton
              color='inherit'
              aria-label='change layout'
              onClick={ this.handleOpenLayoutClick }
            >
              <AppsIcon />
            </IconButton>
            <Menu
              id='layout-menu'
              anchorEl={ this.state.layoutMenuEl }
              open={ this.state.layoutMenuOpen }
              onClose={ this.handleCloseLayoutClick }
            >
              <MenuItem onClick={ event => this.handleSelectLayoutClick(event, "classic") }>Classic</MenuItem>
              <MenuItem onClick={ event => this.handleSelectLayoutClick(event, "toolbar") }>Toolbar</MenuItem>
              <MenuItem onClick={ event => this.handleSelectLayoutClick(event, "compact") }>Compact</MenuItem>
              <MenuItem onClick={ event => this.handleSelectLayoutClick(event, "boxed") }>Boxed</MenuItem>
              <MenuItem onClick={ event => this.handleSelectLayoutClick(event, "funky") }>Funky</MenuItem>
              <MenuItem onClick={ event => this.handleSelectLayoutClick(event, "tabbed") }>Tabbed</MenuItem>
              <MenuItem onClick={ () => this.handleDirectionChange }>
                <FormGroup>
                  <FormControlLabel
                    control={ <Switch
                      checked={ theme.direction === "rtl" }
                      onChange={ this.handleDirectionChange }
                      aria-label='Theme Direction'
                    /> }
                    label='RTL Direction'
                  />
                </FormGroup>
              </MenuItem>
            </Menu>
            <IconButton
              color={ "inherit" }
              aria-label={ "admin login" }
              onClick={ authUser => this.handleAdminLoginClick(authUser) }
            >
              <PersonIcon />
            </IconButton>
            <IconButton
              color={ "inherit" }
              aria-label={ "admin logoff" }
              onClick={ authUser => this.handleAdminLogoffClick(authUser) }
            >
              <IoMdLogOut />
            </IconButton>

            <IconButton
              color='inherit'
              aria-label='open notifications'
              onClick={ this.props.toggleNotifications }
            >
              <NotificationsIcon />
            </IconButton>
          </Toolbar>
        }
      </AuthUserContext.Consumer>
    );
  }
}


function mapStateToProps(state) {
  return {
    layout : {
      sidenavOpen : state.layout.sidenavOpen
    }
  };
}

ContentToolbar.propTypes = {
  width : PropTypes.string.isRequired,
  layout : PropTypes.shape({
                             sidenavOpen : PropTypes.bool
                           }).isRequired,
  theme : PropTypes.shape({}).isRequired,
  toggleSidenav : PropTypes.func.isRequired,
  toggleNotifications : PropTypes.func.isRequired,
  updateLayout : PropTypes.func.isRequired,
  changeTheme : PropTypes.func.isRequired,
  changeThemeDirection : PropTypes.func.isRequired,
  location : PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  withWidth(),
  withTheme(),
  connect(mapStateToProps, {
    toggleSidenav,
    toggleNotifications,
    updateLayout,
    changeTheme,
    changeThemeDirection
  })
)(ContentToolbar);
