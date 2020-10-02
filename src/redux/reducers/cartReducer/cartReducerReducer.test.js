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

it('should start processing payments', () => {
    expect(cartReducerReducer({ processingPayment: false }, actionCreators.setProcessingPayment(true)))
        .toEqual({ processingPayment: true })
})
