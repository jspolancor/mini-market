import { createAction, handleActions } from 'redux-actions';

import { 
    SET_PRODUCT_MODAL_OPEN,
    SET_ANIMATING_PRODUCT_MODAL,
    SET_SELECTED_PRODUCT_ID
} from '../../sagas/storeSaga/storeSagaSaga';

export const actions = {
    SET_SELECTED_PRODUCT_ID,
    SET_PRODUCT_MODAL_OPEN,
    SET_ANIMATING_PRODUCT_MODAL
}

export const actionCreators = {
    setSelectedProductId: createAction(SET_SELECTED_PRODUCT_ID), // triggered by the cart sagas, used for testing
    setProductModalOpen: createAction(SET_PRODUCT_MODAL_OPEN), // triggered by the cart sagas, used for testing
    setAnimatingProductModal: createAction(SET_ANIMATING_PRODUCT_MODAL), // triggered by the cart sagas, used for testing
}

export const initialState = {
    productModalOpen: false,
    animatingProductModal: false,
    selectedProductId: null,
}

export default handleActions(
    {
        [SET_SELECTED_PRODUCT_ID]: (state, action) => ({
            ...state,
            selectedProductId: action.payload
        }),
        [SET_PRODUCT_MODAL_OPEN]: (state, action) => ({
            ...state,
            productModalOpen: action.payload
        }),
        [SET_ANIMATING_PRODUCT_MODAL]: (state, action) => ({
            ...state,
            animatingProductModal: action.payload
        }),
    },
    initialState
)