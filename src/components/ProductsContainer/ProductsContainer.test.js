import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ProductsContainer from './ProductsContainer';
import createReduxStore from '../../redux/store';

import ProductCard from '../ProductCard/ProductCard';
import { comics } from '../../constants';

const { store } = createReduxStore();

describe('<ProductsContainer />', () => {

  it('should render products', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProductsContainer />
      </Provider>
    );
    const products = wrapper.find(ProductCard);
    expect(products.length).toBe(comics.length);
  });

});