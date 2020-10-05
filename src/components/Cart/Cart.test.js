import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import createReduxStore from '../../redux/store';

import Cart from './Cart';
import CartItem from '../CartItem/CartItem';

import { comics } from '../../constants/comics';

const { store } = createReduxStore('tests', {
  cartReducer: {
    productsInCart: comics
  }
});

describe('<Cart />', () => {

  it('should render the right amount of products', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const items = wrapper.find(CartItem);

    expect(items.length).toBe(comics.length);
  });
});