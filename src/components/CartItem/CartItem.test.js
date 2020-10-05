import React from 'react';
import { mount } from 'enzyme';

import CartItem from './CartItem';

describe('<CartItem />', () => {

    it('should render and image and the product amount', () => {
        const image = 'image source';
        const amount = 45;

        const wrapper = mount(
            <CartItem image={image} amount={amount} />
        );

        const componentImage = wrapper.find('img');
        const componentAmount = wrapper.find('.amount');
        expect(componentImage.prop('src')).toBe(image);
        expect(componentAmount.text()).toBe(amount.toString());
    });

});