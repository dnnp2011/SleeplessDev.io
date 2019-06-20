// Theme
import { createGenerateClassName, createMuiTheme, jssPreset, MuiThemeProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import PropTypes from 'prop-types';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { IconContext } from 'react-icons';
import { JssProvider } from 'react-jss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
// Auth
import withAuthentication from './auth/withAuthentication';

// Routes
import Routes from './routes';


const jss = create({ plugins: [ ...jssPreset().plugins, rtl() ] });
const generateClassName = createGenerateClassName();


class App extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (document.body) {
      document.body.dir = nextProps.themeConfig.contentTheme.direction;
    }
  }


  render() {
    const childProps = {};
    const { themeConfig, layoutConfig } = this.props;

    sessionStorage.setItem(
      'portalData',
      JSON.stringify({
        theme: {
          ...themeConfig
        },
        layout: {
          ...layoutConfig
        }
      })
    );

    const materialTheme = createMuiTheme(themeConfig.contentTheme);

    return (

        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={materialTheme}>
              <Routes childProps={childProps} layout={layoutConfig} />
            </MuiThemeProvider>
          </JssProvider>
        </IconContext.Provider>
    );
  }
}


function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    layoutConfig: state.layout
  };
}

App.propTypes = {
  themeConfig: PropTypes.shape({
    contentTheme: PropTypes.shape({
      direction: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  layoutConfig: PropTypes.shape({}).isRequired
};

export default compose(withAuthentication, withRouter, connect(mapStateToProps))(App);
