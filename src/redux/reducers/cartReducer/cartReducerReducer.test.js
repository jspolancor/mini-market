import cartReducerReducer, { actions, actionCreators } from './cartReducerReducer'

const productPayload = {
    id: 1,
    name: 'My product'
}

it('should dispatch the ADD_PRODUCT_TO_CART action when addProductToCart() is called', () => {
    expect(actionCreators.addProductToCart(productPayload))
        .toEqual({
            type: actions.ADD_PRODUCT_TO_CART,
            payload: productPayload
        })
})

it('should dispatch the REMOVE_PRODUCT_FROM_CART action when removeProductFromCart() is called', () => {
    expect(actionCreators.removeProductFromCart(1))
        .toEqual({ type: actions.REMOVE_PRODUCT_FROM_CART, payload: 1 })
})

it('should dispatch the SET_PROCESSING_PAYMENT action when setProcessingPayment() is called', () => {
    expect(actionCreators.setProcessingPayment(true))
        .toEqual({ type: actions.SET_PROCESSING_PAYMENT, payload: true })
})

it('should add a product to the cart', () => {
    expect(cartReducerReducer({ productsInCart: [] }, actionCreators.addProductToCart(productPayload)))
        .toEqual({ productsInCart: [productPayload] })
})

it('should remove a product from the cart', () => {
    expect(cartReducerReducer({ productsInCart: [productPayload] }, actionCreators.removeProductFromCart(1)))
        .toEqual({ productsInCart: [] })
})

it('should toggle processing payments', () => {
    expect(cartReducerReducer({ processingPayment: false }, actionCreators.setProcessingPayment(true)))
        .toEqual({ processingPayment: true })
    expect(cartReducerReducer({ processingPayment: true }, actionCreators.setProcessingPayment(false)))
        .toEqual({ processingPayment: false })
})

it('should save the window width', () => {
    expect(cartReducerReducer({ windowWidth: 0 }, actionCreators.setWindowWidth(window.innerWidth)))
        .toEqual({ windowWidth: window.innerWidth })
})

it('should activate and deactivate the cart', () => {
    expect(cartReducerReducer({ cartIsActive: false }, actionCreators.setCartIsActive(true)))
        .toEqual({ cartIsActive: true })
    expect(cartReducerReducer({ cartIsActive: true }, actionCreators.setCartIsActive(false)))
        .toEqual({ cartIsActive: false })
})

it('should open and close the modal', () => {
    expect(cartReducerReducer({ cartModalOpen: false }, actionCreators.setModalOpen(true)))
        .toEqual({ cartModalOpen: true })
    
    expect(cartReducerReducer({ cartModalOpen: true }, actionCreators.setModalOpen(false)))
        .toEqual({ cartModalOpen: false })
})

it('should set the animatingCartModal variable', () => {
    expect(cartReducerReducer({ animatingCartModal: false }, actionCreators.setAnimatingModal(true)))
        .toEqual({ animatingCartModal: true })
    
    expect(cartReducerReducer({ animatingCartModal: true }, actionCreators.setAnimatingModal(false)))
        .toEqual({ animatingCartModal: false })
})