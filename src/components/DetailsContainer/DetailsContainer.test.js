import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import createReduxStore from '../../redux/store';

import DetailsContainer from './DetailsContainer';
import ActiveProduct from '../ActiveProduct/ActiveProduct';

describe('<DetailsContainer />', () => {

    it('should show an info message when the cart is not active and the selectedProduct is not set yet', () => {
        const { store } = createReduxStore('tests', {
            cartReducer: {
                cartIsActive: false
            },
            storeReducer: {
                selectedProductId: null
            }
        });

        const wrapper = mount(
            <Provider store={store}>
                <DetailsContainer />
            </Provider>
        );
        const helpText = wrapper.find('.info');

        expect(helpText.length).toBe(1);
    });

    it('should show the ActiveProduct component when there is one selected product and the cart is not active', () => {
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
                <DetailsContainer />
            </Provider>
        );
        const helpText = wrapper.find(ActiveProduct);

        expect(helpText.length).toBe(1);
    });
});
