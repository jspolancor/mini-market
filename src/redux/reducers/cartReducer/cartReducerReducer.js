import { createAction, handleActions } from 'redux-actions';
import { 
    SET_CART_MODAL_OPEN,
    SET_ANIMATING_CART_MODAL,
    SET_CART_IS_ACTIVE,
    SET_WINDOW_WIDTH
} from '../../sagas/cartSaga/cartSagaSaga';

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
    setProcessingPayment: createAction(SET_PROCESSING_PAYMENT),
    setWindowWidth: createAction(SET_WINDOW_WIDTH), // triggered by the cart sagas, used for testing
    setCartIsActive: createAction(SET_CART_IS_ACTIVE), // triggered by the cart sagas, used for testing
    setModalOpen: createAction(SET_CART_MODAL_OPEN), // triggered by the cart sagas, used for testing
    setAnimatingModal: createAction(SET_ANIMATING_CART_MODAL), // triggered by the cart sagas, used for testing
}

export const initialState = {
    cartIsActive: false,
    cartModalOpen: false,
    processingPayment: false,
    productsInCart: [],
    total: 0,
    animatingCartModal: false,
    windowWidth: window.innerWidth
}

export default handleActions(
    {
        [ADD_PRODUCT_TO_CART]: (state, action) => {
            // Check if the product is already in the cart
            const productIndex = state.productsInCart.findIndex(product => product.id === action.payload.id);
            let updatedProducts = state.productsInCart.map((product, index) => ({
                ...product,
                amount: index === productIndex ? product.amount + 1 : product.amount
            }));

            if(productIndex < 0) {
                updatedProducts = [...state.productsInCart, {
                    ...action.payload,
                    amount: 1
                }];
            }

            return {
                ...state,
                productsInCart: updatedProducts,
                total: updatedProducts.reduce((prev, current) => prev + current.amount * current.price, 0)
            }
        },
        [REMOVE_PRODUCT_FROM_CART]: (state, action) => {
            // Check if the product is already in the cart
            const productIndex = state.productsInCart.findIndex(product => product.id === action.payload);
            let updatedProducts = state.productsInCart.map((product, index) => ({
                ...product,
                amount: index === productIndex ? product.amount - 1 : product.amount
            })).filter(product => product.amount > 0);

            return {
                ...state,
                productsInCart: updatedProducts,
                total: updatedProducts.reduce((prev, current) => prev + current.amount * current.price, 0)
            }
        },
        [SET_CART_IS_ACTIVE]: (state, action) => ({
            ...state,
            cartIsActive: action.payload
        }),
        [SET_WINDOW_WIDTH]: (state, action) => ({
            ...state,
            windowWidth: action.payload
        }),
        [SET_CART_MODAL_OPEN]: (state, action) => ({
            ...state,
            cartModalOpen: action.payload
        }),
        [SET_ANIMATING_CART_MODAL]: (state, action) => ({
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