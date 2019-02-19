import React from 'react';
import ReactDOM from 'react-dom';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import App from './app.component';
import AboutMe from 'components/about-me/aboutme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<AboutMe />', () => {

  let mount;

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it("should render AboutMe", function() {
    const wrapper = mount(<AboutMe />);
  });

});