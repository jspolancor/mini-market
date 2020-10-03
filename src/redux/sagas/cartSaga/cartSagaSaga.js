import { takeEvery, put, delay, select, call } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import { modalAnimationSpeed, breakpoints } from '../../../constants';
import { toggleProductModal } from '../storeSaga/storeSagaSaga';

export const SET_ANIMATING_CART_MODAL = 'saga/cartSaga/SET_ANIMATING_CART_MODAL';
export const SET_CART_MODAL_OPEN = 'saga/cartSaga/SET_CART_MODAL_OPEN';
export const SET_CART_IS_ACTIVE = 'saga/cartSaga/SET_CART_IS_ACTIVE';
export const SET_WINDOW_WIDTH = 'saga/cartSaga/SET_WINDOW_WIDTH';
export const TOGGLE_CART = 'saga/cartSaga/TOGGLE_CART';

export const actions = {
    SET_ANIMATING_CART_MODAL,
    SET_CART_MODAL_OPEN,
    SET_CART_IS_ACTIVE,
    SET_WINDOW_WIDTH,
    TOGGLE_CART
}

export const actionCreators = {
    setAnimatingModal: createAction(SET_ANIMATING_CART_MODAL),
    setModalOpen: createAction(SET_CART_MODAL_OPEN),
    setCartIsActive: createAction(SET_CART_IS_ACTIVE),
    setWindowWidth: createAction(SET_WINDOW_WIDTH),
    toggleCart: createAction(TOGGLE_CART)
}

export const getCartIsActiveState = state => state.cartReducer.cartIsActive;
export const getModalOnMobileState = state => {
    return state.cartReducer.cartIsActive && state.cartReducer.windowWidth <= breakpoints.mobile
}

export function* watchCartIsActive() {
    yield takeEvery(TOGGLE_CART, toggleCart)
}

export function* watchWindowWidth() {
    yield takeEvery(SET_WINDOW_WIDTH, toggleModal);
    yield takeEvery(SET_WINDOW_WIDTH, toggleProductModal);
}

/**
 * toggles the cartIsActive variable in the state
 */
export function* toggleCart() {
    let cartIsActive = yield select(getCartIsActiveState);

    yield put(actionCreators.setCartIsActive(!cartIsActive));
    yield call(toggleModal);
}

/**
 * Checks if the modal is open and if it should be visible on mobile
 * @param {boolean} forceAnimation used for testing
 */
export function* toggleModal(forceAnimation = false) {
    let openModalOnMobile = yield select(getModalOnMobileState);
    yield put(actionCreators.setModalOpen(openModalOnMobile));

    if(openModalOnMobile || forceAnimation) {
        yield put(actionCreators.setAnimatingModal(true));
        yield delay(modalAnimationSpeed);
        yield put(actionCreators.setAnimatingModal(false));
    }
}