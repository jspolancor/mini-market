import React from 'react';
import { shallow } from 'enzyme';

import TopBar from './components/TopBar/TopBar';

import App from './App';

describe('<App />', () => {

  test('renders the TopBar inside the App', () => {
    const wrapper = shallow(<App />);
    const topBar = wrapper.find(TopBar);
    expect(topBar).not.toBeUndefined();
  });

});