import { put, select, delay, call } from 'redux-saga/effects';

import { toggleCart, actions, getModalOnMobileState, getCartIsActiveState, toggleModal } from './cartSagaSaga';
import { modalAnimationSpeed } from '../../../constants';

it('should toggle the cartIsActive state', () => {
    const iterator = toggleCart();

    expect(iterator.next().value)
        .toEqual(select(getCartIsActiveState));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_CART_IS_ACTIVE,
            payload: true
        }));

    expect(iterator.next().value)
        .toEqual(call(toggleModal));
});

it('should toggle the cartModal', () => {
    const iterator = toggleModal(true);

    expect(iterator.next().value)
        .toEqual(select(getModalOnMobileState));
        
    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_MODAL_OPEN
        }));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_ANIMATING_MODAL,
            payload: true
        }));

    expect(iterator.next().value)
        .toEqual(delay(modalAnimationSpeed));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_ANIMATING_MODAL,
            payload: false
        }));
});