import React from 'react';
import { mount } from 'enzyme';

import ProductCard from './ProductCard';

describe('<ProductCard />', () => {

  it('should show the propper ammount', () => {
    const wrapper = mount(
            <ProductCard product={{
                id: 1,
                amount: 3,
                name: '',
                image: ''
            }}
            handleClick={() => false}/>
    );
    const amount = wrapper.find('.amount');
    
    expect(amount.text()).toBe('3');
  });

  it('should execute the handleClick function on click', () => {
    const handleClick = jest.fn();

    const wrapper = mount(
        <ProductCard product={{
            id: 1,
            amount: 3,
            name: '',
            image: ''
        }}
        handleClick={handleClick}/>
    );
    
    wrapper.simulate('click');
    expect(handleClick).toBeCalled();
  });

});