import React from 'react';
import PropTypes from 'prop-types';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { JssProvider } from 'react-jss';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { IconContext } from 'react-icons';
// Theme
import { MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';
// Auth
import withAuthentication from './auth/withAuthentication';
// Apollo and GraphQL
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GraphQL from 'graphql-tag';
// Routes
import Routes from './routes';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
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
          ...themeConfig,
        },
        layout: {
          ...layoutConfig,
        },
      })
    );

    const materialTheme = createMuiTheme(themeConfig.contentTheme);

    const client = new ApolloClient({
      uri: 'https://backend.sleeplessdev.io/graphql',
    });

    return (
      <ApolloProvider client={client}>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={materialTheme}>
              <Routes childProps={childProps} layout={layoutConfig} />
            </MuiThemeProvider>
          </JssProvider>
        </IconContext.Provider>
      </ApolloProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    layoutConfig: state.layout,
  };
}

App.propTypes = {
  themeConfig: PropTypes.shape({
    contentTheme: PropTypes.shape({
      direction: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  layoutConfig: PropTypes.shape({}).isRequired,
};

export default compose(withAuthentication, withRouter, connect(mapStateToProps))(App);
