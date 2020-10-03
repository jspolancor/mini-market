import { takeEvery, put, delay, select } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import { modalAnimationSpeed, breakpoints } from '../../../constants';

export const SET_ANIMATING_PRODUCT_MODAL = 'saga/storeSaga/SET_ANIMATING_PRODUCT_MODAL';
export const SET_PRODUCT_MODAL_OPEN = 'saga/storeSaga/SET_PRODUCT_MODAL_OPEN';
export const SET_SELECTED_PRODUCT_ID = 'saga/storeSaga/SET_SELECTED_PRODUCT_ID';

export const actions = {
    SET_ANIMATING_PRODUCT_MODAL,
    SET_PRODUCT_MODAL_OPEN
}

export const actionCreators = {
    setAnimatingProductModal: createAction(SET_ANIMATING_PRODUCT_MODAL),
    setProductModalOpen: createAction(SET_PRODUCT_MODAL_OPEN),
    setSelectedProductId: createAction(SET_SELECTED_PRODUCT_ID), // triggered by the cart sagas, used for testing
}

export const getProductModalOnMobileState = state => {
    return state.storeReducer.selectedProductId && state.cartReducer.windowWidth <= breakpoints.mobile
}

export function* watchSetSelectedProductId() {
    yield takeEvery(SET_SELECTED_PRODUCT_ID, toggleProductModal)
}

/**
 * Checks if the modal is open and if it should be visible on mobile
 * @param {boolean} forceAnimation used for testing
 */
export function* toggleProductModal(forceAnimation = false) {
    let openModalOnMobile = yield select(getProductModalOnMobileState);
    yield put(actionCreators.setProductModalOpen(openModalOnMobile));

    if(openModalOnMobile || forceAnimation) {
        yield put(actionCreators.setAnimatingProductModal(true));
        yield delay(modalAnimationSpeed);
        yield put(actionCreators.setAnimatingProductModal(false));
    }
}