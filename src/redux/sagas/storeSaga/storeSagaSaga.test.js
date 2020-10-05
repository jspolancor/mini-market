import { put, select, delay } from 'redux-saga/effects';

import { actions, getProductModalOnMobileState, toggleProductModal } from './storeSagaSaga';
import { modalAnimationSpeed } from '../../../constants';

it('should toggle the product modal', () => {
    const iterator = toggleProductModal(true);

    expect(iterator.next().value)
        .toEqual(select(getProductModalOnMobileState));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_PRODUCT_MODAL_OPEN
        }));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_ANIMATING_PRODUCT_MODAL,
            payload: true
        }));

    expect(iterator.next().value)
        .toEqual(delay(modalAnimationSpeed));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_ANIMATING_PRODUCT_MODAL,
            payload: false
        }));
});