import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import createReduxStore from '../../redux/store';

import CartButton from './CartButton';

const { store } = createReduxStore();

describe('<CartButton />', () => {

  it('should show icon and price', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CartButton />
      </Provider>
    );
    const icon = wrapper.find('img');
    const price = wrapper.find('span');

    expect(icon.length).toBe(1);
    expect(price.length).toBe(1);
  });

  it('should execute the handleClick function on click', () => {
    const handleClick = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <CartButton handleClick={handleClick} />
      </Provider>
    );

    const button = wrapper.find('button');

    button.simulate('click');
    expect(handleClick).toBeCalled();
  });

});