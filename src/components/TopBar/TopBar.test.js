import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

describe('<TopBar />', () => {

  it('should show logo and cart button', () => {
    const wrapper = shallow(<TopBar />);
    const logo = wrapper.find('img');
    expect(logo).not.toBeUndefined();
  });
});