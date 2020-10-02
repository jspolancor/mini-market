import { createAction, handleActions } from 'redux-actions';
import { SET_MODAL_OPEN, SET_ANIMATING_MODAL } from '../../sagas/cartSaga/cartSagaSaga';

const ADD_PRODUCT_TO_CART = 'cartReducer/ADD_PRODUCT_TO_CART';
const REMOVE_PRODUCT_FROM_CART = 'cartReducer/REMOVE_PRODUCT_FROM_CART';
const SET_PROCESSING_PAYMENT = 'cartReducer/SET_PROCESSING_PAYMENT';

export const actions = {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    SET_PROCESSING_PAYMENT
}

export const actionCreators = {
    addProductToCart: createAction(ADD_PRODUCT_TO_CART),
    removeProductFromCart: createAction(REMOVE_PRODUCT_FROM_CART),
    setProcessingPayment: createAction(SET_PROCESSING_PAYMENT)
}

export const initialState = {
    cartModalOpen: false,
    processingPayment: false,
    productsInCart: [],
    total: 0,
    animatingCartModal: false
}

export default handleActions(
    {
        [ADD_PRODUCT_TO_CART]: (state, action) => ({
            ...state,
            productsInCart: [...state.productsInCart, action.payload]
        }),
        [REMOVE_PRODUCT_FROM_CART]: (state, action) => ({
            ...state,
            productsInCart: state.productsInCart.filter(product => product.id !== action.payload)
        }),
        [SET_MODAL_OPEN]: (state, action) => ({
            ...state,
            cartModalOpen: action.payload || !state.cartModalOpen
        }),
        [SET_ANIMATING_MODAL]: (state, action) => ({
            ...state,
            animatingCartModal: action.payload
        }),
        [SET_PROCESSING_PAYMENT]: (state, action) => ({
            ...state,
            processingPayment: action.payload
        }),
    },
    initialState
)