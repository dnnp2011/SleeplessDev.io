import React from 'react';
import ReactDOM from 'react-dom';
import { createMount } from '@material-ui/core/test-utils';
import App from './app.component';
import AboutMe from './components/about-me/aboutme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});