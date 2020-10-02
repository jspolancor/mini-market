import { put, select, delay } from 'redux-saga/effects';

import { toggleModal, actions, getCartModalOpenState } from './cartSagaSaga';
import { modalAnimationSpeed } from '../../../constants';

it('should toggle the modal async', () => {
    const iterator = toggleModal();

    expect(iterator.next().value)
        .toEqual(select(getCartModalOpenState));

    expect(iterator.next().value)
        .toEqual(put({
            type: actions.SET_MODAL_OPEN,
            payload: true
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
