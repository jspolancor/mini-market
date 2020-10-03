import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import TopBar from './TopBar';
import CartButton from '../CartButton/CartButton';
import createReduxStore from '../../redux/store';

const { store } = createReduxStore();

describe('<TopBar />', () => {

  it('should show logo and CartButton', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TopBar />
      </Provider>
    );
    const logo = wrapper.find('#logo');
    const cartButton = wrapper.find(CartButton);
    expect(logo.length).toBe(1);
    expect(cartButton.length).toBe(1);
  });

});