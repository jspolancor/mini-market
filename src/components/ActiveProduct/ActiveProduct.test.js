import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import createReduxStore from '../../redux/store';

import ActiveProduct from './ActiveProduct';

describe('<ActiveProduct />', () => {

  it('should add the activeProduct product to the cart', () => {
    const { store } = createReduxStore('tests', {
        cartReducer: {
            cartIsActive: false,
            productsInCart: []
        },
        storeReducer: {
            selectedProductId: 1
        }
    });

    const wrapper = mount(
        <Provider store={store}>
            <ActiveProduct />
        </Provider>
    );
    const addButton = wrapper.find('button.add');
    addButton.simulate('click');
    
    expect(store.getState().cartReducer.productsInCart[0].id).toBe(1);
  });

  it('should remove the activeProduct from the cart', () => {
    const { store } = createReduxStore('tests', {
        cartReducer: {
            cartIsActive: false,
            productsInCart: [{
                id: 1
            }]
        },
        storeReducer: {
            selectedProductId: 1
        }
    });

    const wrapper = mount(
        <Provider store={store}>
            <ActiveProduct />
        </Provider>
    );
    const removeButton = wrapper.find('button.remove');
    removeButton.simulate('click');
    
    expect(store.getState().cartReducer.productsInCart.length).toBe(0);
  });
});
