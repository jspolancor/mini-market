import React from 'react';
import { mount } from 'enzyme';

import Modal from './Modal';
import ProductCard from '../ProductCard/ProductCard';

describe('<Modal />', () => {

    it('should execute the onClose function on click', () => {
        const handleClose = jest.fn();

        const wrapper = mount(
            <Modal open={true} title="" onClose={handleClose} />
        );

        wrapper.find('.close-button').simulate('click');
        expect(handleClose).toBeCalled();
    });

    it('should render the passed children', () => {
        const wrapper = mount(
            <Modal open={true} title="" onClose={() => false}>
                <ProductCard product={{}} handleClick={() => false} />
            </Modal>
        );

        const productCard = wrapper.find(ProductCard);
        expect(productCard.length).toBe(1);;
    });

});