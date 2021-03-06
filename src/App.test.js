import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import TopBar from './components/TopBar/TopBar';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import createReduxStore from './redux/store';

import App from './App';

const { store } = createReduxStore();

describe('<App />', () => {

  test('renders the TopBar inside the App', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const topBar = wrapper.find(TopBar);
    expect(topBar).not.toBeUndefined();
  });

  test('renders the ProductsContainer inside the App', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const productsContainer = wrapper.find(ProductsContainer);
    expect(productsContainer).not.toBeUndefined();
  });

});