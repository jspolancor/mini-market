import { takeEvery, put, delay, select } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { modalAnimationSpeed } from '../../../constants';

export const TOGGLE_MODAL = 'saga/cartSaga/TOGGLE_MODAL';
export const SET_ANIMATING_MODAL = 'saga/cartSaga/SET_ANIMATING_MODAL';
export const SET_MODAL_OPEN = 'saga/cartSaga/SET_MODAL_OPEN';

export const actions = {
    TOGGLE_MODAL,
    SET_ANIMATING_MODAL,
    SET_MODAL_OPEN
}

export const actionCreators = {
    toggleModal: createAction(TOGGLE_MODAL),
    setAnimatingModal: createAction(SET_ANIMATING_MODAL),
    setModalOpen: createAction(SET_MODAL_OPEN)
}

export const getCartModalOpenState = (state) => state.cartModalOpen;

export default function* watchToggleModal() {
    yield takeEvery(TOGGLE_MODAL, toggleModal)
}

export function* toggleModal() {
    let cartModalOpen = yield select(getCartModalOpenState);
    yield put(actionCreators.setModalOpen(!cartModalOpen));
    yield put(actionCreators.setAnimatingModal(true));
    yield delay(modalAnimationSpeed);
    yield put(actionCreators.setAnimatingModal(false));
}